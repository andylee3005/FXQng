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
  displayedColumns: string[] = ['symbol', 'tenor', 'price', 'quoteTime'];
  dataSource = new MatTableDataSource(this.quotes);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private dataService: SpringfxqService) { }

  public inputs = {
    selectedSymbol: 'ALL',
    selectedTenor: 'ALL',
    inputMin: '0',
    inputMax: '1000',
  }

  
  ngOnInit() {
    this.dataService.getAll().subscribe( ( data: any[]) => {
      console.log( data);
      this.quotes = data;
      this.generateTable();
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  symbolChangeHandler(event: any) {
    //update the ui
    this.inputs.selectedSymbol = event.value;
    if (this.inputs.selectedSymbol == "ALL") {
      this.ngOnInit();
      this.inputs.selectedTenor = "ALL";
    } else {
      this.dataService.findBySymbolTenor(this.inputs.selectedSymbol, this.inputs.selectedTenor).subscribe((data: any[]) => {
        console.log(data);
        this.quotes = data;
        this.generateTable();
      })  
    }
  }

  tenorChangeHandler(event: any) {
    //update the ui
    this.inputs.selectedTenor = event.value;
    if (this.inputs.selectedTenor == "ALL") {
      this.ngOnInit();
      this.dataService.findBySymbol(this.inputs.selectedSymbol).subscribe((data: any[]) => {
        console.log(data);
        this.quotes = data;
        this.generateTable();
      })
    } else {
      this.dataService.findBySymbolTenor(this.inputs.selectedSymbol, this.inputs.selectedTenor).subscribe((data: any[]) => {
        console.log(data);
        this.quotes = data;
        this.generateTable();
      })  
    }
  }

  // function gt(element, index, array) {
  //   return (element >= 10);
  // }
  minInputChangeHandler(event: any) {
    //update the ui
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue < this.inputs.inputMin) {
      this.ngOnInit();
    }
    this.inputs.inputMin = filterValue;
    this.generateTable();
    if (filterValue == '') this.ngOnInit();
  }

  maxInputChangeHandler(event: any) {
    //update the ui
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue > this.inputs.inputMax) {
      this.ngOnInit();
    }
    this.inputs.inputMax = filterValue;
    this.generateTable();
    if (filterValue == '') this.ngOnInit();
  }

  generateTable() {
    this.quotes = this.quotes.filter(p => p.fxSpot.price >= this.inputs.inputMin);
    this.quotes = this.quotes.filter(p => p.fxSpot.price <= this.inputs.inputMax);
    this.dataSource = new MatTableDataSource(this.quotes);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}