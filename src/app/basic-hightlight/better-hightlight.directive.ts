import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

  @Input() defaultColor: string = 'white';
  @Input() hightlightColor: string = 'Blue';

  @HostBinding ('style.backgroundColor') backgroundColor:string = this.defaultColor;

  constructor(private elementRef: ElementRef,private renderer: Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'Blue');
  }
  @HostListener('mouseover') mouseover(evenData:Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'Blue');
    //this.backgroundColor = 'red';
    this.backgroundColor = this.hightlightColor;
  }
  @HostListener('mouseleave') mouseleave(evenData:Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    //this.backgroundColor = 'yellow';
    this.backgroundColor = this.defaultColor;
  }

}
