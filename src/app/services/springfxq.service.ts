import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const FXQURL = 'http://192.168.0.22:4983/FXQ';
const TESTURL = 'http://192.168.0.22:4983/api/test/'

@Injectable({
  providedIn: 'root'
})
export class SpringfxqService {
  
  constructor(private http: HttpClient) {  }
  private tempurl;
  test(role: string): Observable<any> {
    return this.http.get( TESTURL + role, { responseType: 'text' });
  }

  getAll(): Observable<any> {
    return this.http.get( FXQURL + '/list' );
  }

  getById(id: number): Observable<any> {
    return this.http.get( FXQURL + '/id/' + id );
  }

  findBySymbol(symbol: string): Observable<any> {
    return this.http.get( FXQURL + '/symbol/' + symbol );
  }

  findBySymbolTenor(symbol: string, tenor: string): Observable<any> {
    return this.http.get( FXQURL + '/symbol/' + symbol + '/tenor/' + tenor );
  }

  newgetAll(): Observable<any> {
    return this.http.get( FXQURL + '/slist');
  }

  newgetById(id: number): Observable<any> {
    return this.http.get( FXQURL + '/id/' + id);
  }

  newfindBySymbol(symbol: string): Observable<any> {
    return this.http.get( FXQURL + '/ssymbol/' + symbol );
  }

  newfindBySymbolTenor(symbol: string, tenor: string): Observable<any> {
    return this.http.get( FXQURL + '/ssymbol/' + symbol + '/tenor/' + tenor );
  }
}
