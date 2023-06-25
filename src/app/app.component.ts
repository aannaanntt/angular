import { Component ,Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basics';

  property:string

  myVal:string='Technological earth'

  myText : string = 'Search in technological earth';


  constructor(private rend :Renderer2){

  }

// ngAfterViewInit(){
//  this.rend.setStyle(this.box.nativeElement,'backgroundColor','red'); 
// }

  getData(event){
    this.property=event;
  }
}
