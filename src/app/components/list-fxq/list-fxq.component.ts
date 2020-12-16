import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SpringfxqService } from '../../services/springfxq.service';
import { from, Subject} from 'rxjs';
import { FXQuote } from '../../entity/FXQuote';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-fxq',
  templateUrl: './list-fxq.component.html',
  styleUrls: ['./list-fxq.component.css']
})

export class ListFxqComponent implements OnInit, OnDestroy {


  applyFilterMin(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyFilterMax(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  quotes: FXQuote[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  displayedColumns: string[] = ['symbol', 'tenor', 'quoteTime', 'price'];
  dataSource = new MatTableDataSource(this.quotes);
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private dataService: SpringfxqService) { }

  ngOnInit() {
    this.dataService.getAll().subscribe( ( data: any[]) => {
      console.log( data);
      this.quotes = data;
      this.dataSource = new MatTableDataSource(this.quotes);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
