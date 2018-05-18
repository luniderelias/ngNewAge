import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: 'body'
})
export class BodyDirective implements OnInit {

  constructor() { }

  ngOnInit() {
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 354
    });
  }

}
