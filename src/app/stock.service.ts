import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from './config/config';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class Stock {
  date: Date;
  open: number;
  high: number;
  low: number;

  constructor(date: Date, open: number, high: number, low: number) {
    this.date = date;
    this.open = open;
    this.high = high;
    this.low = low;
  }
}

@Injectable()
export class StockService {

    constructor(private http:HttpClient) {
    }

    getStocks() {
      this.http.get(baseUrl).subscribe(res => {
          console.log(res);
      }),
      err => console.error(err),
      () => console.log('done loading stocks')
    }

}
