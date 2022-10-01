import { TitleDebts } from './../../models/title-debts';
import { Debts } from './../../models/debts';
import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/models/userData';
import { DataServerService } from 'src/app/services/data-server.service';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-page-debts',
  templateUrl: './main-page-debts.component.html',
  styleUrls: ['./main-page-debts.component.css']
})
export class MainPageDebtsComponent implements OnInit {

  users:UserData[] = [];
  debts:Debts[][];
  index:number = 0;
  titles:TitleDebts[];
  title:string = ""
  term = ""

  constructor(
    public dataServer:DataServerService,
    public login: LoginService
    ) { }

  ngOnInit(): void {
    this.dataServer.getUsers().subscribe(users => this.users = users);
    this.dataServer.getDebts().subscribe(debts => this.debts = debts);
    this.dataServer.getServices().subscribe(titles => this.titles = titles);
  }

  changeDebt(debt:string){
    for(let i = 0; i<this.titles.length; i++){
      if(debt == this.titles[i].debt){
        this.index = i;
      }
    }
  }

  createService(form: NgForm){
    if(form.valid){
      this.dataServer.createService(this.title).subscribe(()=>{
        this.dataServer.getServices().subscribe(titles => this.titles = titles);
        this.dataServer.getDebts().subscribe(debts => this.debts = debts);
        this.index = this.titles.length;
      })
    }
  }

  deleteUser(index:number){
    this.dataServer.deleteUser(index).subscribe((users)=>{
      this.users = users;
    })
  }

  deleteService(index:number){
    this.dataServer.deleteService(index).subscribe((titles)=>{
      this.titles = titles;
      console.log(this.titles);
      this.dataServer.getDebts().subscribe(debts => this.debts = debts);
      this.index = 0;
    })
  }
}
