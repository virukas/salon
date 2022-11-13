import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-pipess',
  templateUrl: './pipess.component.html',
  styleUrls: ['./pipess.component.css']
})
export class PipessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  city:any
  search=undefined
cityname=
[
  {'city_name':'mumbi'},
  {'city_name':'thane'},
  {'city_name':'navimumbai'},
  {'city-name':'panvel'},
'mumbi','thane','navi mumbai'
]
search1(){
let citys=this.cityname.filter((city:any)=>{
  if(city.city_name==this.city){
    return 
    
  }
  else{
    return false
  }
})
console.log(citys)
}



}
