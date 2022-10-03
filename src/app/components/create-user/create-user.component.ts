import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserService } from 'src/app/services/create-user.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(
    private createUser: CreateUserService, 
    private router: Router, 
    private login: LoginService
    ) { }

  ngOnInit(): void {
  }

  formUserCreate = new FormGroup({
    name: new FormControl('', [
      Validators.required    
    ]),
    surname: new FormControl('', [
      Validators.required    
    ]),
    email: new FormControl('', [
      Validators.required    
    ]),
    pass: new FormControl('', [
      Validators.required      
    ])
  })

  onSubmitUser(){
    this.createUser.createUser(
      this.formUserCreate.value.name as string,
      this.formUserCreate.value.surname as string,
      this.formUserCreate.value.email as string,
      this.formUserCreate.value.pass as string
    ).subscribe((data:any)=>{

      if(data.createUser == "Ok"){
        if(this.login.islogin){
          this.router.navigateByUrl("/debts");
        } else this.router.navigateByUrl("/");       
      }

    })
  }
}
