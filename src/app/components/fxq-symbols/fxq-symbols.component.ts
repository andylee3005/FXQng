import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpringfxqService } from '../../services/springfxq.service';
import { from, Subject} from 'rxjs';
import { FXQuote } from '../../entity/FXQuote';

@Component({
  selector: 'app-fxq-symbols',
  templateUrl: './fxq-symbols.component.html',
  styleUrls: ['./fxq-symbols.component.css']
})
export class FxqSymbolsComponent implements OnInit, OnDestroy {

  quotes: FXQuote[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: SpringfxqService) { }
  selectedSymbol: string = 'USDCAD';

  ngOnInit() {
    this.dataService.findBySymbol(this.selectedSymbol).subscribe( ( data: any[]) => {
      console.log( data);
      this.quotes = data;
    })
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
    })
  }
}

