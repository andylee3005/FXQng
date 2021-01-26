import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlsService } from './urls.service';

// const FXQURL = 'http://192.168.0.14:4983/FXQ';
// const TESTURL = 'http://192.168.0.14:4983/api/test/';

@Injectable({
  providedIn: 'root'
})
export class SpringfxqService extends UrlsService {
  
  constructor(private http: HttpClient) {
    super();
  }

  FXQURL = this.baseURL + 'FXQ';
  TESTURL = this.baseURL + 'api/test/'
  
  test(role: string): Observable<any> {
    return this.http.get( this.TESTURL + role, { responseType: 'text' });
  }

  getAll(): Observable<any> {
    return this.http.get( this.FXQURL + '/list' );
  }

  getById(id: number): Observable<any> {
    return this.http.get( this.FXQURL + '/id/' + id );
  }

  findBySymbol(symbol: string): Observable<any> {
    return this.http.get( this.FXQURL + '/symbol/' + symbol );
  }

  findBySymbolTenor(symbol: string, tenor: string): Observable<any> {
    return this.http.get( this.FXQURL + '/symbol/' + symbol + '/tenor/' + tenor );
  }

  newgetAll(): Observable<any> {
    return this.http.get( this.FXQURL + '/slist');
  }

  newgetById(id: number): Observable<any> {
    return this.http.get( this.FXQURL + '/id/' + id);
  }

  newfindBySymbol(symbol: string): Observable<any> {
    return this.http.get( this.FXQURL + '/ssymbol/' + symbol );
  }

  newfindBySymbolTenor(symbol: string, tenor: string): Observable<any> {
    return this.http.get( this.FXQURL + '/ssymbol/' + symbol + '/tenor/' + tenor );
  }

}
