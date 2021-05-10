import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
// import { SpringfxqService } from '../../services/springfxq.service';
import { ReactivefxqService } from '../../services/reactivefxq.service';
import { Observable, Subject, interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { RFXQuote } from '../../entity/RFXQuote';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-reactivefxq',
  templateUrl: './reactivefxq.component.html',
  styleUrls: ['./reactivefxq.component.css']
})
export class ReactivefxqComponent implements OnInit {

  symbolsArr: string[] = ["USDCAD", "CADJPY", "EURUSD", "USDJPY"];
  tenorsArr: string[] = ["ON", "TN", "SN"];//, "1W", "2W", "1M", "2M", "3M", "6M", "9M", "1Y"];
  allData: RFXQuote[][][] = [];

  selectedSymbol: string = '';
  selectedTenor: string = '';
  quotes: RFXQuote[] = [];
  selectedQuote: RFXQuote;
  // mode: string;
  // pagination: boolean;
  // page: number;
  // size: number;


  constructor(private dataService: ReactivefxqService, private token: TokenStorageService, private cdr: ChangeDetectorRef) {
    // this.mode = 'reactive';
    // this.pagination = true;
    // this.page = 0;
    // this.size = 50;
  }

  ngOnInit(): void {
    for (let i=0; i<this.symbolsArr.length; i++) {
      this.allData[i] = [];
      for (let j=0; j<this.tenorsArr.length; j++) {
        this.allData[i][j] = [];
      }
    }
    // this.requestQuoteStream();
    this.getAllData();
    interval(1000)
    .pipe(takeWhile(() => true))
    .subscribe(() => {
      // this.setData();
    });
    
  }

  resetData() {
    this.quotes = [];
  }

  requestQuoteStream(): void {
    this.resetData();
    let quoteObservable = new Observable<RFXQuote>();
    quoteObservable = this.dataService.getAll();
    // if (this.selectedSymbol=='') {
    //   quoteObservable = this.dataService.getAll();
    // } else {
    //   quoteObservable = this.dataService.retrieveBySymbolTenor(this.selectedSymbol, this.selectedTenor);
    // }
    quoteObservable.subscribe(quote => {
      this.quotes.unshift(quote);
      while (this.quotes.length > 5) this.quotes.pop();
      // console.log(quote);
      // console.log(this.quotes.length);
      this.cdr.detectChanges();
    });
    
  }

  onSelect(quote: RFXQuote): void {
    this.selectedQuote = quote;
    console.log(this.selectedQuote);
    this.cdr.detectChanges();
  }

  getAllData(): void {
    this.resetData();
    // let symtenObs = this.dataService.retrieveBySymbol(this.selectedSymbol);
    let symtenObs = this.dataService.getAll();
    
    symtenObs.subscribe(quote => {
      let symIndex = this.symbolsArr.indexOf(quote.symbol);
      let tenIndex = this.tenorsArr.indexOf(quote.tenor);
      if (tenIndex !== -1) {
        this.allData[symIndex][tenIndex].unshift(quote);
        if (this.allData[symIndex][tenIndex].length > 2) this.allData[symIndex][tenIndex].pop();
        this.cdr.detectChanges();

      }

    });
    console.log(this.allData);
    // this.setData();
  }

  setData(): void {
    this.resetData();
    console.log("refreshing");
    for (let i=0; i<this.symbolsArr.length; i++) {
      for (let j=0; j<this.tenorsArr.length; j++) {
        let q = this.allData[i][j][0];
        this.quotes.push(q);
        // console.log(this.quotes);
        this.cdr.detectChanges();
      }
    }
  }
}
