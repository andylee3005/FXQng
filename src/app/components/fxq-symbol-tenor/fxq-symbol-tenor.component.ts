import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SpringfxqService } from '../../services/springfxq.service';
import { from, Subject} from 'rxjs';
import { FXQuote } from '../../entity/FXQuote';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-fxq-symbol-tenor',
  templateUrl: './fxq-symbol-tenor.component.html',
  styleUrls: ['./fxq-symbol-tenor.component.css']
})

export class FxqSymbolTenorComponent implements OnInit, OnDestroy {

  quotes: FXQuote[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  displayedColumns: string[] = ['symbol', 'tenor', 'price', 'quoteTime'];
  dataSource = new MatTableDataSource(this.quotes);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: SpringfxqService) { }
  selectedSymbol: string = 'USDCAD';
  selectedTenor: string = 'ON';

  ngOnInit() {
    this.dataService.findBySymbolTenor(this.selectedSymbol, this.selectedTenor).subscribe( ( data: any[]) => {
      console.log( data);
      this.quotes = data;
      this.dataSource = new MatTableDataSource(this.quotes);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  symbolChangeHandler (event: any) {
    //update the ui
    this.selectedSymbol = event.value;
    if (this.selectedTenor == 'ALL') {
      this.dataService.findBySymbol(this.selectedSymbol).subscribe( ( data: any[]) => {
        console.log( data);
        this.quotes = data;
        this.dataSource = new MatTableDataSource(this.quotes);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
    } else {
      this.dataService.findBySymbolTenor(this.selectedSymbol, this.selectedTenor).subscribe( ( data: any[]) => {
        console.log( data);
        this.quotes = data;
        this.dataSource = new MatTableDataSource(this.quotes);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
    }
    
  }

  tenorChangeHandler (event: any) {
    //update the ui
    this.selectedTenor = event.value;
    if (this.selectedTenor == 'ALL') {
      this.dataService.findBySymbol(this.selectedSymbol).subscribe( ( data: any[]) => {
        console.log( data);
        this.quotes = data;
        this.dataSource = new MatTableDataSource(this.quotes);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
  
    } else {
      this.dataService.findBySymbolTenor(this.selectedSymbol, this.selectedTenor).subscribe( ( data: any[]) => {
        console.log( data);
        this.quotes = data;
        this.dataSource = new MatTableDataSource(this.quotes);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })  
    }
  }
}

