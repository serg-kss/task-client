import { TitleDebts } from './../../models/title-debts';
import { Debts } from './../../models/debts';
import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/models/userData';
import { DataServerService } from 'src/app/services/data-server.service';

@Component({
  selector: 'app-main-page-debts',
  templateUrl: './main-page-debts.component.html',
  styleUrls: ['./main-page-debts.component.css']
})
export class MainPageDebtsComponent implements OnInit {

  users:UserData[] | undefined;
  debts:Debts[][];
  index:number = 0;
  

  titles:TitleDebts[] =[];

  constructor(public dataServer:DataServerService) { 
    
  }

  ngOnInit(): void {
    this.dataServer.getUsers().subscribe(users => this.users = users);
    this.dataServer.getDebts().subscribe(debts => {this.debts = debts;console.log(this.debts)});
    this.dataServer.getServices().subscribe(titles => {this.titles = titles; console.log(this.titles)});
  }

  changeDebt(debt:string){
    for(let i = 0; i<this.titles.length; i++){
      if(debt == this.titles[i].debt){
        this.index = i;
      }
    }
  }
}
