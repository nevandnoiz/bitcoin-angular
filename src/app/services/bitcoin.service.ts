import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  
  private rateUrl = 'https://blockchain.info/tobtc?currency=USD&value=1'
  private marketPriceUrl = 'https://api.blockchain.info/charts/market-price?timespan=12months&format=json&cors=true'
  private confirmedTransactUrl = 'https://api.blockchain.info/charts/n-transactions?timespan=12months&format=json&cors=true'

  constructor(private http: HttpClient) { }

  public getRate(): Observable<any> {
    return this.http.get(this.rateUrl)
  }

  public getMarketPrice(): Observable<any> {
    return this.http.get(this.marketPriceUrl)
  }

  public getConfirmedTransactions(): Observable<any> {
    return this.http.get(this.confirmedTransactUrl)
  }
}
