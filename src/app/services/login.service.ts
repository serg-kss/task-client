import { catchError, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from './error.service';



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

  constructor( 
    private http: HttpClient, 
    private router: Router,
    private errorService: ErrorService) { }


  login(email: string, pass: string){
    return this.http.post('http://localhost:8080/api/authentication', {
      email:email,
      password:pass
   }).pipe(
    tap(data => this.userData=data),
    catchError(this.errorHandler.bind(this))
   )
  }

  private errorHandler(error: HttpErrorResponse){
    this.errorService.handle(error.message)
    return throwError(() => error.message)   
 }

}
