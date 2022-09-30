import { Component, OnInit } from '@angular/core';
import { SpecialDebt } from 'src/app/models/sDebt';
import { UserData } from 'src/app/models/userData';
import { DataServerService } from 'src/app/services/data-server.service';

@Component({
  selector: 'app-main-page-debts',
  templateUrl: './main-page-debts.component.html',
  styleUrls: ['./main-page-debts.component.css']
})
export class MainPageDebtsComponent implements OnInit {

  users:UserData[] | undefined;
  debts:any = [];
  special_debt:any =[]

  titles:string[] = ["Электроэнергия", "Газ", "Вода"]

  constructor(public dataServer:DataServerService) { 
    
  }

  ngOnInit(): void {
    this.dataServer.getUsers().subscribe(users => this.users = users);
    this.dataServer.getDebts().subscribe(debts => {
      this.debts = debts;

      for (let index = 0; index < this.debts.length; index++) {
        this.special_debt.push(this.debts[index][1])       
      }
    });

  }

  changeDebt(debt:string){
    if (debt=="Электроэнергия") {
      for (let index = 0; index < this.debts.length; index++) {
        this.special_debt.push(this.debts[index][1])       
      }
    }else if(debt=="Газ"){
      for (let index = 0; index < this.debts.length; index++) {
        this.special_debt.push(this.debts[index][2])       
      }
    }else if(debt=="Вода"){
      for (let index = 0; index < this.debts.length; index++) {
        this.special_debt.push(this.debts[index][3])  
      }

    }
  }
}
