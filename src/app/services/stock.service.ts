import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlsService } from './urls.service';


@Injectable({
  providedIn: 'root'
})
export class StockService extends UrlsService {

  constructor(private http: HttpClient) {
    super();
  }
  STOCKURL = this.baseURL + "STOCK/spot";
  // STOCKURL = "http://localhost:4985/STOCK/spot";

  getMostRecent(symbol: string): Observable<any> {
    return this.http.get(`${this.STOCKURL}/${symbol}`);
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.STOCKURL}/list`);
  }

  getById(id: string): Observable<any> {
    return this.http.get(`${this.http}/id/${id}`);
  }

  getBySymbol(symbol: string): Observable<any> {
    return this.http.get(`${this.http}/symbol/${symbol}`);
  }

  getByCurrency(currency: string): Observable<any> {
    return this.http.get(`${this.http}/currency/${currency}`);
  }

  getBySymbolTime(symbol: string, time: number): Observable<any> {
    return this.http.get(`${this.http}/symbol/${symbol}/time/${time}`);
  }

  generateAll(): Observable<any> {
    return this.http.get(`${this.STOCKURL}/generate`);
  }

  generateBySymbol(symbol: string): Observable<any> {
    return this.http.get(`${this.STOCKURL}/generate/${symbol}`);
  }
}
