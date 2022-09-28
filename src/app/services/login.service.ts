import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  islogin:boolean = false;
  userData:any=[]

  logout(){
    this.islogin = false;
    this.router.navigateByUrl("/");
  }

  constructor( private http: HttpClient, private router: Router) { }


  login(email: string, pass: string){
    return this.http.post('http://localhost:8080/api/authentication', {
      email:email,
      password:pass
   }).pipe(
    tap(data => this.userData=data)
   )
  }
}
