import { Component, OnInit, ViewChild } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { StockService } from '../../services/stock.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { Portfolio } from 'src/app/entity/Portfolio';
import { Stock } from '../../entity/Stock';
import { ActivatedRoute, Router } from '@angular/router';
import { StockSpotComponent } from '../stock-spot/stock-spot.component';
import { Spot } from 'src/app/entity/Spot';
import { PortfolioListComponent } from '../portfolio-list/portfolio-list.component';

@Component({
  selector: 'app-portfolio-edit',
  templateUrl: './portfolio-edit.component.html',
  styleUrls: ['./portfolio-edit.component.css']
})
export class PortfolioEditComponent implements OnInit {

  displayedColumns: string[] = ['symbol', 'currency', 'price', 'currPrice', 'volume'];
  
  isLoggedIn = false;
  pid: string;
  port: Portfolio;

  stocks: Stock[];

  volumeToBuy: number;
  volumeToSell: number;
  stockVolControl;
  
  // @ViewChild(StockSpotComponent) stockSpotComponent: StockSpotComponent;
  spot;
  stock;

  constructor(
    private portfolioService: PortfolioService, 
    private stockService: StockService,
    private tokenStorageServices: TokenStorageService, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.pid = this.route.snapshot.paramMap.get('id');
    
    // this.isLoggedIn = !!this.tokenStorageServices.getToken();

    this.getStocks();
    console.log(this.port);
    // this.getCurrentPrice();
    this.spot = null;
    this.stock = null;
  }

  getStocks(): void {
    this.portfolioService.getById(this.pid).subscribe( 
      data => {
        this.port = data;
        this.stocks = data.stocks;
        // console.log(data);
        this.getCurrentPrice();
      }, error => {
        console.log(error);
      });
  }

  getCurrentPrice(): void {
    this.stocks.forEach(s => {
      this.stockService.getMostRecent(s.symbol).subscribe(
        data => {
          s.currPrice = data.px;
          // console.log("Most recent stock price: " + data.price);
        }, error => {
          console.log(error);
        }
      );
    });
    // for (let i=0; i<this.stocks.length; i++) {
    //   this.stockService.getMostRecent(this.stocks[i].symbol).subscribe(
    //     data => {
    //       this.stocks[i].currPrice = data.px;
    //       console.log("Most recent price: " + this.stocks[i].currPrice);
    //     }, error => {
    //       console.log(error);
    //     }
    //   );
    // }
  }

  sellStock(): void {
    if (this.volumeToSell === parseInt(this.stock.volume, 10)) {
      this.stocks = this.stocks.filter( ({spotId}) => spotId !== this.stock.spotId);
      this.port.stocks = this.stocks;
      console.log("removing entire stock");
    } else {
      console.log("toSellId: " + this.stock.spotId);
      let toSell: Stock = this.stocks.find(s => s.spotId === this.stock.spotId);
      console.log("found Id: " + toSell.spotId);
      toSell.volume = (parseInt(toSell.volume, 10) - this.volumeToSell).toString();
    }
    this.updatePortfolio();
    this.router.navigate(['/portfolio/edit/' + this.pid]);
  }

  updatePortfolio(): void {
    
    this.portfolioService.edit(this.pid, this.port).subscribe(
      response => {
        console.log(response);
        this.getStocks();
      }, error => {
        console.log(error);
      }
    );
  }

  addStock(): void {
    let toBuy: Stock = this.stocks.find(e => e.spotId === this.spot.id);
    if (toBuy === undefined) {
    this.getStocks();
    toBuy = new Stock(this.spot.id, this.spot.symbol, this.spot.currency, "0", this.spot.px);
      this.port.stocks.push(toBuy);
      console.log("Stock added");
      // this.updatePortfolio();
    }
    toBuy.volume = (parseInt(toBuy.volume, 10) + this.volumeToBuy).toString();
    console.log("Stock purchased")
    this.updatePortfolio();
    // let found = this.stock.find(e => e.spotId === this.spot.id);
    // console.log(found);
    // this.ngOnInit();
    // this.getStocks();
    
  }

  onSpotClicked(data) {
    this.spot = data;
    // this.getCurrentPrice();
    // console.log("data: " + data);
  }
  
  onStockClicked(row) {
    this.stock = row;
    this.volumeToSell = parseInt(row.volume, 10);
    console.log(this.stock.id);
  }
}
