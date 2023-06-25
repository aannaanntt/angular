import { Component, OnInit } from '@angular/core';
import { ApplicationServiceService } from '../../application-service.service';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  userName: string='Technological earth'
  constructor(private appService : ApplicationServiceService) { 
    this.appService.userName.subscribe(uname=>{
      this.userName=uname;
    })

  }

  ngOnInit() {
  }



//-> make this method in all 4 comp also change html file
  //to make it work as expected
  updateUser(uname) : void {
    // this.userName=uname.value

    this.appService.userName.next(uname.value)
  }
}
