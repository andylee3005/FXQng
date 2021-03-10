import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlsService } from './urls.service';


@Injectable({
  providedIn: 'root'
})
export class ClientService extends UrlsService {

  constructor(private http: HttpClient) {
    super();
  }
  CLIENTURL = this.baseURL + "CLIENT";

  getAll(): Observable<any> {
    return this.http.get(this.CLIENTURL + '/list');
  }

  getById(id: string): Observable<any> {
    return this.http.get(`${this.CLIENTURL}/id/${id}`);
  }

  edit(id: string, data: any): Observable<any> {
    return this.http.put(`${this.CLIENTURL}/edit/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${this.CLIENTURL}/edit/${id}`);
  }

  getByName(fn: string, ln: string): Observable<any> {
    return this.http.get(`${this.CLIENTURL}/name/${fn}/${ln}`);
  }

  getByEmail(email: string): Observable<any> {
    return this.http.get(`${this.CLIENTURL}/email/${email}`)
  }

  getByAddress(address: string): Observable<any> {
    return this.http.get(`${this.CLIENTURL}/address/${address}`)
  }

  getByPhone(phone: string): Observable<any> {
    return this.http.get(`${this.CLIENTURL}/phone/${phone}`)
  }
  
  
}
