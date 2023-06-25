import { Component, OnInit } from '@angular/core';
import { ApplicationServiceService } from '../../application-service.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
  constructor(private appService : ApplicationServiceService) { 
    this.appService.userName.subscribe(uname=>{
      this.userName=uname;
    })

  } 
  ngOnInit() {
  }

  userName = 'Technological earth'
}
