import { Component, OnInit,ViewChild } from '@angular/core';
import { ApplicationServiceService } from '../../application-service.service';
import { TestdirectivesDirective } from 'src/app/appDirectives/testdirectives.directive'; 

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

 @ViewChild(TestdirectivesDirective) myDirective : TestdirectivesDirective; 

  constructor(private appService : ApplicationServiceService) { 
    this.appService.userName.subscribe(uname=>{
      this.userName=uname;
    })

  }

  ngOnInit() {
  }

    userName = 'Technological earth'


    changeColor(value:string){
        this.myDirective.changeBg(value);
    }

}
