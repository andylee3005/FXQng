import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpringfxqService } from '../../services/springfxq.service';
import { from, Subject } from 'rxjs';
import { FXQuote } from '../../entity/FXQuote';

@Component({
  selector: 'app-fxq-detail',
  templateUrl: './fxq-detail.component.html',
  styleUrls: ['./fxq-detail.component.css']
})
export class FxqDetailComponent implements OnInit, OnDestroy {

  quotes: FXQuote[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  
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
    })
  }

  tenorChangeHandler(event: any) {
    //update the ui
    this.inputs.selectedTenor = event.value;
    this.dataService.findBySymbolTenor(this.inputs.selectedSymbol, this.inputs.selectedTenor).subscribe((data: any[]) => {
      console.log(data);
      this.quotes = data;
    })
  }

  minInputChangeHandler(event: any) {
    //update the ui
    this.inputs.inputMin = event.value;

  }

  maxInputChangeHandler(event: any) {
    //update the ui
    this.inputs.inputMax = event.value;

  }

  
}