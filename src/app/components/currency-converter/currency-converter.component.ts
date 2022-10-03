import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CurrencyService } from 'src/app/services/currency.service';


@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent{

  names = ["USD","EUR","UAH"];
  calculation: string[]=[];
  amount: number = 1;
  selectedCurrency: string | undefined;
  isUah = false;

  constructor(public currency:CurrencyService) { }

  transform(data: number){
    return data.toFixed(2).toString();
  }
  pushToCalculation(index: number){
    this.calculation.push(this.transform(this.amount * Number(this.currency.currency[index].buy)));
    this.calculation.push(this.transform(this.amount * Number(this.currency.currency[index].sale)));
  }
  pushToCalculationUAH(index:number){
    this.calculation.push(this.transform(this.amount / Number(this.currency.currency[index].sale)));
  }
  clear(){
    this.calculation = [];
  }
  initNull(){
    this.calculation = ["-","-"];
  }

  close(){
    this.clear();
    this.amount= 1;
    this.selectedCurrency = undefined;
    this.isUah = false;
  }

  calculate(form: NgForm){
    if (form.valid) {

      this.clear()
      this.isUah = false;

      if(this.selectedCurrency=="USD"){       
        this.initNull();
        this.pushToCalculation(0);
      } else if(this.selectedCurrency=="EUR"){      
        this.initNull();
        this.pushToCalculation(1);   
      } else if(this.selectedCurrency=="UAH"){     
        this.isUah = true;
        this.pushToCalculationUAH(0);
        this.pushToCalculationUAH(1);
        this.calculation.push("-");
      } 
    }
  }
}
