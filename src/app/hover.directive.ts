import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  constructor(private el: ElementRef) { }
  @Input() defaultColor: string;
  @Input('myHighlight') highlightColor: string;
   
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'Beige');
  }
   
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
   
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
