import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {


  constructor(
    private http: HttpClient,
    private errorService: ErrorService) { }

  createUser(name:string, surname:string, email: string, pass: string){
    return this.http.post('http://localhost:8080/api/create_user', {
      name:name,
      surname:surname,
      email:email,
      password:pass
   }).pipe(
    catchError(this.errorHandler.bind(this))
   )
  }

  private errorHandler(error: HttpErrorResponse){
    this.errorService.handle(error.message)
    return throwError(() => error.message)   
 }
}
