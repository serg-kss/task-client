import { Debts } from './../models/debts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, tap } from 'rxjs';
import { UserData } from '../models/userData';
import { TitleDebts } from '../models/title-debts';

@Injectable({
  providedIn: 'root'
})
export class DataServerService {

  constructor(private http: HttpClient) { }

  usersArray: UserData[] | undefined
  debts:Debts[][] | undefined
  services:TitleDebts[] = []

  getUsers(): Observable<UserData[]>{
    return this.http.get<UserData[]>('http://localhost:8080/api/all_users').pipe(
     retry(2),
     tap(users => {
      this.usersArray = users; 
    })
    )
  }

  deleteUser(i:number): Observable<UserData[]>{
    return this.http.delete<UserData[]>('http://localhost:8080/api/delete_user/'+i)
  }

  getDebts(): Observable<Debts[][]>{
    return this.http.get<Debts[][]>('http://localhost:8080/api/all_users_debts').pipe(
     retry(2),
     tap(debts => {
      this.debts = debts; 
    })
    )
  }

  getServices(): Observable<TitleDebts[]>{
    return this.http.get<TitleDebts[]>('http://localhost:8080/api/all_users_services').pipe(
     retry(2),
     tap(services => {
      this.services = services; 
    })
    )
  }

 
  createService(debt:string): Observable<TitleDebts>{
    return this.http.post<TitleDebts>('http://localhost:8080/api/create_services', {
      debt:debt
   })
  }

  deleteService(i:number): Observable<TitleDebts[]>{
    return this.http.delete<TitleDebts[]>('http://localhost:8080/api/delete_services/'+i)
  }


     
}
