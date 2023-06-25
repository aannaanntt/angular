import { Component, OnInit } from '@angular/core';
import { ApplicationServiceService } from '../../application-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private appService : ApplicationServiceService) { 
    this.appService.userName.subscribe(uname=>{
      this.userName=uname;
    })

  }

  ngOnInit() {
  }

  userName = 'Technological earth'
}
