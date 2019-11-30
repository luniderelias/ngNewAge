var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageDownloadComponent } from './page-download/page-download.component';
import { PageCtaComponent } from './page-cta/page-cta.component';
import { PageFeaturesComponent } from './page-features/page-features.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { CloseMenuDirective } from './close-menu.directive';
import { BodyDirective } from './body.directive';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            MainNavComponent,
            PageHeaderComponent,
            PageDownloadComponent,
            PageContactComponent,
            PageCtaComponent,
            PageFeaturesComponent,
            PageFooterComponent,
            CloseMenuDirective,
            BodyDirective
        ],
        imports: [
            BrowserModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map