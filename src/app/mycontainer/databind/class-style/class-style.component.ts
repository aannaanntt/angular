import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {
isActive:boolean = false
myPro : boolean =false
myStyle1:string="15px"
mysTyle2:string="5px"

  constructor() { }

  ngOnInit() {
  }


multiClasses ={
class1:false,
class2:false,
class3:false


}

multiSTyle ={
 'font-size': '20px',
 'font-family': 'sans-serif'

}
}
