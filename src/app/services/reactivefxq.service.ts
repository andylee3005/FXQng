import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlsService } from './urls.service';
import { RFXQuote } from '../entity/RFXQuote';


@Injectable({
  providedIn: 'root'
})
export class ReactivefxqService {

  RFXQURL = 'http://localhost:4982/rFXQ';

  constructor(private http: HttpClient) { }

  getAll(): Observable<RFXQuote> {
    return new Observable<RFXQuote>((observer) => {
      let eventSource = new EventSource(this.RFXQURL + '/list');
      eventSource.onmessage = (event) => {
        let json = JSON.parse(event.data);
        observer.next(new RFXQuote(json['id'], json['symbol'], json['tenor'], json['price'], json['pxStr'], json['createdTime']));
      };
      eventSource.onerror = (error) => {
        if(eventSource.readyState === 0) {
          console.log('The stream has been closed by the server.');
          eventSource.close();
          observer.complete();
        } else {
          observer.error('EventSource error: ' + error);
        }
      }
    });
  }

  retrieveBySymbol(symbol: string): Observable<RFXQuote> {
    return new Observable<RFXQuote>((observer) => {
      let eventSource = new EventSource(this.RFXQURL + '/symbol/' + symbol);
      eventSource.onmessage = (event) => {
        let json = JSON.parse(event.data);
        observer.next(new RFXQuote(json['id'], json['symbol'], json['tenor'], json['price'], json['pxStr'], json['createdTime']));
      };
      eventSource.onerror = (error) => {
        if(eventSource.readyState === 0) {
          console.log('The stream has been closed by the server.');
          eventSource.close();
          observer.complete();
        } else {
          observer.error('EventSource error: ' + error);
        }
      }
    });
  }

  retrieveBySymbolTenor(symbol: string, tenor: string): Observable<RFXQuote> {
    return new Observable<RFXQuote>((observer) => {
      let eventSource = new EventSource(this.RFXQURL + '/symbol/' + symbol + '/tenor/' + tenor);
      eventSource.onmessage = (event) => {
        let json = JSON.parse(event.data);
        observer.next(new RFXQuote(json['id'], json['symbol'], json['tenor'], json['price'], json['pxStr'], json['createdTime']));
      };
      eventSource.onerror = (error) => {
        if(eventSource.readyState === 0) {
          console.log('The stream has been closed by the server.');
          eventSource.close();
          observer.complete();
        } else {
          observer.error('EventSource error: ' + error);
        }
      }
    });
  }

  retrieveMostRecentBySymbol(symbol: string): Observable<RFXQuote> {
    return new Observable<RFXQuote>((observer) => {
      let eventSource = new EventSource(this.RFXQURL + '/msymbol/' + symbol);
      eventSource.onmessage = (event) => {
        let json = JSON.parse(event.data);
        observer.next(new RFXQuote(json['id'], json['symbol'], json['tenor'], json['price'], json['pxStr'], json['createdTime']));
      };
      eventSource.onerror = (error) => {
        if(eventSource.readyState === 0) {
          console.log('The stream has been closed by the server.');
          eventSource.close();
          observer.complete();
        } else {
          observer.error('EventSource error: ' + error);
        }
      }
    });
  }
}
