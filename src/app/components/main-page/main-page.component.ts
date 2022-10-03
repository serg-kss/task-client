import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  constructor(public modalWindow: ModalService) { }

}
