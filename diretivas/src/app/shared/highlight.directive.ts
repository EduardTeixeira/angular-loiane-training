import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  };

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  };

  // @HostBinding('style.backgroundColor') backgroundColor : string;
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  private backgroundColor: string;


  @Input() defaultColor: string = 'white';

  @Input('highlight') highlightColor: string = 'yellow';

  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

}
