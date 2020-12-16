import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpringfxqService } from '../../services/springfxq.service';
import { from, Subject} from 'rxjs';
import { FXQuote } from '../../entity/FXQuote';


@Component({
  selector: 'app-fxq-symbol-tenor',
  templateUrl: './fxq-symbol-tenor.component.html',
  styleUrls: ['./fxq-symbol-tenor.component.css']
})

export class FxqSymbolTenorComponent implements OnInit, OnDestroy {

  quotes: FXQuote[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: SpringfxqService) { }
  selectedSymbol: string = 'USDCAD';
  selectedTenor: string = 'ON';

  ngOnInit() {
    this.dataService.findBySymbolTenor(this.selectedSymbol, this.selectedTenor).subscribe( ( data: any[]) => {
      console.log( data);
      this.quotes = data;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  symbolChangeHandler (event: any) {
    //update the ui
    this.selectedSymbol = event.value;
    this.dataService.findBySymbolTenor(this.selectedSymbol, this.selectedTenor).subscribe( ( data: any[]) => {
      console.log( data);
      this.quotes = data;
    })
  }

  tenorChangeHandler (event: any) {
    //update the ui
    this.selectedTenor = event.value;
    this.dataService.findBySymbolTenor(this.selectedSymbol, this.selectedTenor).subscribe( ( data: any[]) => {
      console.log( data);
      this.quotes = data;
    })
  }
}

