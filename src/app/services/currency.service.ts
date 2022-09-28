import { Injectable } from '@angular/core';
import { Observable, retry, tap } from 'rxjs';
import { Сurrency } from '../models/currency';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  currency: Сurrency[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getCurrency(): Observable<Сurrency[]>{
    return this.http.get<Сurrency[]>('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').pipe(
     retry(2),
     tap(currency => {
      this.currency = currency; 
      this.currency = this.currency.slice(0,2);})
    )
  }
}
