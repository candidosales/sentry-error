import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Pagination } from '../interface/pagination.interface';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private readonly BASE_URL = environment.apiUrl;

  constructor(private readonly http: HttpClient) { }

  getPlanets() {
    return this.http.get<Pagination<any>>(`${this.BASE_URL}/planets`);
  }

  getStarships() {
    return this.http.get<Pagination<any>>(`${this.BASE_URL}/starships`);
  }
}
