import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlsService } from './urls.service';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService extends UrlsService {

  constructor(private http: HttpClient) {
    super();
  }
  PORTURL = this.baseURL + "PORT";
  // PORTURL = "http://localhost:4986/PORT";

  getAllByCID(cid): Observable<any> {
    console.log(`${this.PORTURL}/cid/${cid}`);
    return this.http.get(`${this.PORTURL}/cid/${cid}`);
  }

  getById(id): Observable<any> {
    return this.http.get(`${this.PORTURL}/id/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(`${this.PORTURL}/create`, data);
  }

  edit(id, data): Observable<any> {
    return this.http.put(`${this.PORTURL}/edit/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${this.PORTURL}/edit/${id}`);
  }

}
