import { Component, OnInit ,Input,Output,EventEmitter,ViewChild,ElementRef} from '@angular/core';
//import {ApplicationServiceService} from '../application-service.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //  constructor(private appService : ApplicationServiceService) { 
  //   this.appService.userName.subscribe(uname=>{
  //     this.userName=uname;
  //   })

  // }

@ViewChild('tempRef') tempRef:ElementRef

constructor(){

}


@Input()   placeholderText:string ="abc"

@Output() property1 = new EventEmitter<string>(); 

property2:string='message from child'

userName = 'Technological earth'

productss : any ;


  ngOnInit() {

    // this.appService.product()
    // .subscribe((proData)=>{
    //   this.productss=proData;
    // })

    console.log(this.tempRef);
  }
statusOnline:boolean=true;
    products : Array<{name:string}>=[
      {name:'laptop'},
      {name:'mobile'},
      {name:'Tv'},
      {name:'Washing Machine'}

      ];


    sendData(){
      this.property1.emit(this.property2);
      // this.appService.buttonClicked();
    }
}
