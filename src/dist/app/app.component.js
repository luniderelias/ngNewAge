import { Component } from '@angular/core';
import 'jquery';
export class AppComponent {
    constructor() {
        this.title = 'Tap Learn - The Best Way to Learn a New Language';
    }
    ngOnInit() {
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 48)
                    }, 1000, 'easeInOutExpo');
                    return false;
                }
            }
            return true;
        });
        const navbarCollapse = function () {
            if ($('#mainNav').offset().top > 100) {
                $('#mainNav').addClass('navbar-shrink');
            }
            else {
                $('#mainNav').removeClass('navbar-shrink');
            }
        };
        navbarCollapse();
        $(window).scroll(navbarCollapse);
    }
}
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            },] },
];
//# sourceMappingURL=app.component.js.map