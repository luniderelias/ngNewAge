import { Component, HostListener, Directive, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '.js-scroll-trigger'
})

// Closes responsive menu when a scroll trigger link is clicked
export class CloseMenuDirective {
  constructor(private el: ElementRef) { }
  @HostListener('click') onClick() {
    (<any>$('.navbar-collapse')).collapse('hide');
  }
}
