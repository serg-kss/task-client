import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  error$ = new Subject<string>()

  handle(message: string){
    this.error$.next(message)
  }

  clear(){
    this.error$.next('')
  }

}
