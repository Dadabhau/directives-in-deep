import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

  @HostBinding ('style.backgroundColor') backgroundColor:string = 'yellow';

  constructor(private elementRef: ElementRef,private renderer: Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'Blue');
  }
  @HostListener('mouseover') mouseover(evenData:Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'Blue');
    this.backgroundColor = 'red'
  }
  @HostListener('mouseleave') mouseleave(evenData:Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'yellow';
  }

}
