import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlsService } from './urls.service';

//const USERURL = 'http://192.168.0.14:4983/USER';

@Injectable({
  providedIn: 'root'
})
export class UserService extends UrlsService {

  constructor(private http: HttpClient) {
    super();
  }
  USERURL = this.baseURL + "USER";

  getAll(): Observable<any> {
    return this.http.get(this.USERURL + '/all');
  }

  get(id): Observable<any> {
    return this.http.get(`${this.USERURL}/${id}`);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${this.USERURL}/edit/${id}`, data);
  }

  edit(id, data): Observable<any> {
    return this.http.put(`${this.USERURL}/edit/profile/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${this.USERURL}/edit/${id}`);
  }

}
