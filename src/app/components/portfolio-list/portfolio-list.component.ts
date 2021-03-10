import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { Portfolio } from 'src/app/entity/Portfolio';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  cid: string;
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  pName: string;

  portfolios: any;
  currentPortfolio = null;
  currentIndex = -1;

  newPName: string = '';
  newCurrency: string;

  constructor(private portfolioService: PortfolioService, private tokenStorageServices: TokenStorageService) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageServices.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageServices.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.cid = user.id;
    }
    this.getPortfolios();
    // this.refreshList();
  }

  getPortfolios(): void {
    this.portfolioService.getAllByCID(this.cid).subscribe( 
      data => {
        this.portfolios = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  refreshList(): void {
    this.getPortfolios();
    this.currentPortfolio = null;
    this.currentIndex = -1;
  }

  setActivePortfolio(portfolio, index): void {
    this.currentPortfolio = portfolio;
    this.currentIndex = index;
    console.log(this.currentPortfolio);
  }

  deletePortfolio(portfolio): void {
    this.portfolioService.delete(this.currentPortfolio.id).subscribe(
      response => {
        console.log(response);
        this.refreshList();
      }, error => {
        console.log(error);
      });
  }

  createPortfolioClick(): void {
    let port = new Portfolio(this.cid, this.newPName, this.newCurrency);
    this.portfolioService.create(port).subscribe(
      response => {
        console.log(response);
        this.refreshList();
      }, error => {
        console.log(error);
      });
  }

}
