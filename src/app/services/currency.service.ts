import { Injectable } from '@angular/core';
import { catchError, Observable, retry, tap, throwError } from 'rxjs';
import { Сurrency } from '../models/currency';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  currency: Сurrency[] = [];

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  getCurrency(): Observable<Сurrency[]>{
    return this.http.get<Сurrency[]>('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').pipe(
     retry(2),
     tap(currency => {
      this.currency = currency; 
      this.currency = this.currency.slice(0,2);}),
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse){
    this.errorService.handle(error.message)
    return throwError(() => error.message)    
 }
}
