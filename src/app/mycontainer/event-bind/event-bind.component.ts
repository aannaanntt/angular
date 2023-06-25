import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  msg :string


hidden : boolean =true

  addtoCart(event){
    this.msg=event.target.value + "added in cart";
  }


  onInputClick(event){
    console.log(event.target.value)
  }

displayDetails(tempRef){
  console.log(tempRef.value)
}


}



