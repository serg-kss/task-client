import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, tap } from 'rxjs';
import { UserData } from '../models/userData';

@Injectable({
  providedIn: 'root'
})
export class DataServerService {

  constructor(private http: HttpClient) { }

  usersArray: UserData[] | undefined
  debts:any = []

  getUsers(): Observable<UserData[]>{
    return this.http.get<UserData[]>('http://localhost:8080/api/all_users').pipe(
     retry(2),
     tap(users => {
      this.usersArray = users; 
    })
    )
  }

  getDebts(){
    return this.http.get('http://localhost:8080/api/all_users_debts').pipe(
     retry(2),
     tap(debts => {
      this.debts = debts; 
    })
    )
  }
}
