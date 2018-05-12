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
    this.getStocks();
  }

  getStocks() {
    this.stockService.getStocks().subscribe(
      data => { this.stocks = data },
      err => console.error(err),
      () => console.log('done loading stocks')
    );
  }
}
