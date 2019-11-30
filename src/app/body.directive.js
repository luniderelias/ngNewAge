import { Directive } from '@angular/core';
export class BodyDirective {
    constructor() { }
    ngOnInit() {
        $('body').scrollspy({
            target: '#mainNav',
            offset: 354
        });
    }
}
BodyDirective.decorators = [
    { type: Directive, args: [{
                selector: 'body'
            },] },
];
BodyDirective.ctorParameters = () => [];
//# sourceMappingURL=body.directive.js.map