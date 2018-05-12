import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { baseUrl } from './config/config';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StockService {

    constructor(private http:HttpClient) {
    }

    getStocks() {
      return this.http.get(baseUrl);
    }

}
