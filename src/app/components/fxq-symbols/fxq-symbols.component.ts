import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SpringfxqService } from '../../services/springfxq.service';
import { from, Subject } from 'rxjs';
import { FXQuote } from '../../entity/FXQuote';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-fxq-symbols',
  templateUrl: './fxq-symbols.component.html',
  styleUrls: ['./fxq-symbols.component.css']
})
export class FxqSymbolsComponent implements OnInit, OnDestroy {

  quotes: FXQuote[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  displayedColumns: string[] = ['symbol', 'tenor', 'quoteTime', 'price'];
  dataSource = new MatTableDataSource(this.quotes);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: SpringfxqService) { }
  selectedSymbol: string = 'USDCAD';

  ngOnInit() {
    this.dataService.findBySymbol(this.selectedSymbol).subscribe( ( data: any[]) => {
      console.log( data);
      this.quotes = data;
      this.dataSource = new MatTableDataSource(this.quotes);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedSymbol = event.value;
    this.dataService.findBySymbol(this.selectedSymbol).subscribe( ( data: any[]) => {
      console.log( data);
      this.quotes = data;
      this.dataSource = new MatTableDataSource(this.quotes);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }
}

