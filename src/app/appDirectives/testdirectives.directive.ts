import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestdirectives]'
})
export class TestdirectivesDirective {

  constructor(private el : ElementRef,private rend : Renderer2) { 


    this.rend.setStyle(this.el.nativeElement,'backgroundColor','red')


  }


  changeBg(color : string){
    this.rend.setStyle(this.el.nativeElement,'backgroundcolor',color)

  }

}
