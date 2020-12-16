import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpringfxqService } from '../../services/springfxq.service';
import { from, Subject} from 'rxjs';
import { FXQuote } from '../../entity/FXQuote';

@Component({
  selector: 'app-fxq-add',
  templateUrl: './fxq-add.component.html',
  styleUrls: ['./fxq-add.component.css']
})
export class FxqAddComponent implements OnInit, OnDestroy {

  quotes: FXQuote[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: SpringfxqService) { }

  ngOnInit() {
    this.dataService.getAll().subscribe( ( data: any[]) => {
      console.log( data);
      this.quotes = data;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}

