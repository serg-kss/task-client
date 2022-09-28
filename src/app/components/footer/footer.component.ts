import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 
  signes: string[]=[];

  constructor( public currency:CurrencyService) {}

  ngOnInit(): void {
    this.currency.getCurrency().subscribe( data =>{
      for (let index = 0; index < data.length; index++) {
        this.signes.push(data[index].ccy);     
      }
    })
  }



  

}
