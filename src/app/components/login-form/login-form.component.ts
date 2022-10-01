import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{

  constructor(
    public loginService: LoginService,
    private router: Router) { }


  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(50)
    ]),
    pass: new FormControl('', [
      Validators.required      
    ])
  })

  onSubmit(){
    this.loginService.login(
      this.form.value.email as string,
      this.form.value.pass as string
    ).subscribe((data:any) =>{ 
        let array = data;
        if (array[1].auth == "Ok") {
          this.loginService.islogin = true;
          this.router.navigateByUrl("/debts");
        } else  
        {
          this.router.navigateByUrl("/");
          console.log('login error')
        }
    })      
  }
}
