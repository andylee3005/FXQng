import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {

  constructor() { }

  baseURL = "http://192.168.0.182:4983/";
}
