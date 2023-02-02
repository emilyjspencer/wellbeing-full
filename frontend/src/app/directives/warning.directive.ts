import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appWarning]'
})
export class WarningDirective {



  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick(){
      alert("Are you sure you want to log out");
      this.renderer.setStyle(this.el.nativeElement, 'transition', '0.3s');
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'pink')
    }

  }
