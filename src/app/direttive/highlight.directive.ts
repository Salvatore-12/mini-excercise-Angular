import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight = ''
  @Input() defaulColor = ''
  


  constructor(private element: ElementRef) { 
  }

    @HostListener('mouseenter') onMouseEnter(){
    this.cambiaColore(this.appHighlight || this.defaulColor || 'purple' )
    
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.cambiaColore('transparent')
  }
 
 cambiaColore(colore:string){
 this.element.nativeElement.style.backgroundColor = colore
 }


 
}
