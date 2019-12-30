import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tap Learn - The Best Way to Learn a New Language';

  ngOnInit() {
  // Smooth scrolling using jQuery easing
  (<any>$('a.js-scroll-trigger[href*="#"]:not([href="#"])')).click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, 'swing');
        return false;
      }
    }
  });

  const navbarCollapse = function() {
    const nav = (<any>$('#mainNav'));
    if (nav.length) {
    if (nav.offset().top > 100) {
      nav.addClass('navbar-shrink');
    } else {
      nav.removeClass('navbar-shrink');
    }
  }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  }

}
