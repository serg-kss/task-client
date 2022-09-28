import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  islogin:boolean = false;
  userData:any=[]

  logout(){
    this.islogin = false;
  }

  constructor( private http: HttpClient) { }


  login(email: string, pass: string){
    return this.http.post('http://localhost:8080/api/authentication', {
      email:email,
      password:pass
   }).pipe(
    tap(data => this.userData=data)
   )
  }
}
