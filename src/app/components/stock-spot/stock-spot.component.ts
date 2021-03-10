import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Spot } from 'src/app/entity/Spot';

@Component({
  selector: 'app-stock-spot',
  templateUrl: './stock-spot.component.html',
  styleUrls: ['./stock-spot.component.css']
})
export class StockSpotComponent implements OnInit {
  
  isLoggedIn = false;

  currentSpot: Spot = new Spot();
  displayedColumns: string[] = ['symbol', 'currency', 'price', 'createdTime'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  
  @Output() spotSelected = new EventEmitter();

  constructor(private stockService: StockService, private tokenStorageServices: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageServices.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageServices.getUser();
      // this.roles = user.roles;

      // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

    }
    
    this.stockService.getAll().subscribe( 
      ( data: any[]) => {
      // console.log( data);
      // this.spots = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }
  

  getSpots(): void {
    this.stockService.getAll().subscribe( 
      data => {
        // this.spots = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  onRowClicked(spot: Spot) {
    this.currentSpot = spot;
    // console.log(this.currentSpot);
    this.spotSelected.emit(this.currentSpot);
    // console.log(this.currentIndex);
    
  }

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
    
  // }
}
