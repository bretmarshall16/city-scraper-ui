import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  prefix = 'http://localhost/city-scraper-api';
  constructor(private http: HttpClient) { }


  getTeams(): Observable<any> {
    return this.http.get(`${this.prefix}/stats/total`);
  }
}
