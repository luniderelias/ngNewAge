import { HostListener, Directive, ElementRef } from '@angular/core';
export class CloseMenuDirective {
    constructor(el) {
        this.el = el;
    }
    onClick() {
        $('.navbar-collapse').collapse('hide');
    }
}
CloseMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '.js-scroll-trigger'
            },] },
];
CloseMenuDirective.ctorParameters = () => [
    { type: ElementRef }
];
CloseMenuDirective.propDecorators = {
    onClick: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=close-menu.directive.js.map