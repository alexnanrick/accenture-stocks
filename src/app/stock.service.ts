import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StockService {

    constructor(private http:HttpClient) {
    }

    getStocks() {
      return this.http.get('https://www.alphavantage.co/query?apikey=9UQOCR6KC3TOD5RH&function=TIME_SERIES_DAILY_ADJUSTED&symbol=ACN')
    }

}
