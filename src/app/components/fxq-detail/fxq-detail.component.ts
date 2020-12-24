import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SpringfxqService } from '../../services/springfxq.service';
import { from, Subject } from 'rxjs';
import { FXQuote } from '../../entity/FXQuote';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-fxq-detail',
  templateUrl: './fxq-detail.component.html',
  styleUrls: ['./fxq-detail.component.css']
})
export class FxqDetailComponent implements OnInit, OnDestroy {

  quotes: FXQuote[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  displayedColumns: string[] = ['symbol', 'tenor', 'quoteTime', 'price'];
  dataSource = new MatTableDataSource(this.quotes);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private dataService: SpringfxqService) { }

  public inputs = {
    selectedSymbol: 'USDCAD',
    selectedTenor: 'ON',
    inputMin: '0',
    inputMax: '1000',
  }

  
  ngOnInit() {
    this.dataService.findBySymbolTenor(this.inputs.selectedSymbol, this.inputs.selectedTenor).subscribe((data: any[]) => {
      console.log(data);
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

  symbolChangeHandler(event: any) {
    //update the ui
    this.inputs.selectedSymbol = event.value;
    this.dataService.findBySymbolTenor(this.inputs.selectedSymbol, this.inputs.selectedTenor).subscribe((data: any[]) => {
      console.log(data);
      this.quotes = data;
      this.dataSource = new MatTableDataSource(this.quotes);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
    
  }

  tenorChangeHandler(event: any) {
    //update the ui
    this.inputs.selectedTenor = event.value;
    this.dataService.findBySymbolTenor(this.inputs.selectedSymbol, this.inputs.selectedTenor).subscribe((data: any[]) => {
      console.log(data);
      this.quotes = data;
      this.dataSource = new MatTableDataSource(this.quotes);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  // function gt(element, index, array) {
  //   return (element >= 10);
  // }
  minInputChangeHandler(event: any) {
    //update the ui
    const filterValue = (event.target as HTMLInputElement).value;
    this.inputs.inputMin = event.value;
    
  }

  maxInputChangeHandler(event: any) {
    //update the ui
    this.inputs.inputMax = event.value;

  }

  
}