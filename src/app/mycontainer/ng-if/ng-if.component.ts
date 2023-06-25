import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
selectedProduct:string;

  constructor() { }

  ngOnInit() {
  }

  enabled=false;

  onClick(){
this.enabled=true;
  }


  onChange(event){
    console.log(event.target.value)
    this.selectedProduct=event.target.value
  }

}
