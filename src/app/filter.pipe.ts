import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(city:any, cityname:any): any {
   return null
  }
}
   //search=undefined
// cityname=
// [
//   {'city_name':'mumbi'},
//   {'city_name':'thane'},
//   {'city_name':'navimumbai'},
//   {'city-name':'panvel'},
// ]

