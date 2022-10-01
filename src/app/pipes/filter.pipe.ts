import { UserData } from './../models/userData';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(userData:UserData[],search: string): UserData[] {
    if(search.length==0) return userData
    return userData.filter(p => p.surname.toLowerCase().includes(search.toLowerCase()));
  }

}
