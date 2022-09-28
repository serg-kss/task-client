import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  islogin:boolean = true;

  logout(){
    this.islogin = false;
  }

  constructor() { }
}
