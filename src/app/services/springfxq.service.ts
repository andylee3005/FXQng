import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpringfxqService {
  private  fxqUrl = 'http://192.168.0.25:4983/FXQ';
  constructor(private http: HttpClient) {  }

  getAll(): Observable<any> {
    return this.http.get( `${this.fxqUrl}/list`);
  }

  getById(id: number): Observable<any> {
    return this.http.get( `${this.fxqUrl}/id/${id}`);
  }

  findBySymbol(symbol: string): Observable<any> {
    return this.http.get( `${this.fxqUrl}/ssymbol/${symbol}`);
  }

  findBySymbolTenor(symbol: string, tenor: string): Observable<any> {
    return this.http.get( `${this.fxqUrl}/ssymbol/${symbol}/tenor/${tenor}`);
  }

}
