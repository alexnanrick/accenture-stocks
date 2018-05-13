import { Component } from '@angular/core';
import { StockService } from './stock.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ACN Stocks';

  public stocks;

  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.stockService.getStocks();
  }
}
