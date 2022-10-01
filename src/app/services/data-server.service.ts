import { Debts } from './../models/debts';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, tap, throwError } from 'rxjs';
import { UserData } from '../models/userData';
import { TitleDebts } from '../models/title-debts';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class DataServerService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService) { }

  usersArray: UserData[] | undefined
  debts:Debts[][] | undefined
  services:TitleDebts[] = []

  getUsers(): Observable<UserData[]>{
    return this.http.get<UserData[]>('http://localhost:8080/api/all_users').pipe(
     retry(2),
     tap(users => {
      this.usersArray = users; 
    }),
    catchError(this.errorHandler.bind(this))
    )
  }

  deleteUser(i:number): Observable<UserData[]>{
    return this.http.delete<UserData[]>('http://localhost:8080/api/delete_user/'+i).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }

  getDebts(): Observable<Debts[][]>{
    return this.http.get<Debts[][]>('http://localhost:8080/api/all_users_debts').pipe(
     retry(2),
     tap(debts => {
      this.debts = debts; 
    }),
    catchError(this.errorHandler.bind(this))
    )
  }

  getServices(): Observable<TitleDebts[]>{
    return this.http.get<TitleDebts[]>('http://localhost:8080/api/all_users_services').pipe(
     retry(2),
     tap(services => {
      this.services = services; 
    }),
    catchError(this.errorHandler.bind(this))
    )
  }

 
  createService(debt:string): Observable<TitleDebts>{
    return this.http.post<TitleDebts>('http://localhost:8080/api/create_services', {
      debt:debt
   }).pipe(catchError(this.errorHandler.bind(this)))
  }

  deleteService(i:number): Observable<TitleDebts[]>{
    return this.http.delete<TitleDebts[]>('http://localhost:8080/api/delete_services/'+i).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }
  private errorHandler(error: HttpErrorResponse){
    this.errorService.handle(error.message)
    return throwError(() => error.message)   
 }

     
}
