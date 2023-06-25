import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  data : string= "Amit"
enable : boolean=false

  appStatus:boolean=false;
  status1:string="online";
  status2:string="offline"

  constructor() { }

  ngOnInit() {
  }

  get  dataName(){
    return this.data;
  }

  myMethod(){
    return "My channel name is Technological earth" 
  }

}
