import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomstyle]'
})
export class CustomstyleDirective {

  constructor(private el: ElementRef) {
    let style = el.nativeElement.style;
    style.color = "green";
    style.fontSize = '88px';
    style.display = 'none'
  }

}
