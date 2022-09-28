import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {


  constructor(private http: HttpClient) { }

  createUser(name:string, surname:string, email: string, pass: string){
    return this.http.post('http://localhost:8080/api/create_user', {
      name:name,
      surname:surname,
      email:email,
      password:pass
   })
  }
}
