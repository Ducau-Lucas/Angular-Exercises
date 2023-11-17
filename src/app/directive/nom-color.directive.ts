import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNomColor]'
})
export class NomColorDirective {

  constructor(private elmRef: ElementRef) { 
    elmRef.nativeElement.style.color = "red"
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');         
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.elmRef.nativeElement.style.backgroundColor = color;
  }

  

}
