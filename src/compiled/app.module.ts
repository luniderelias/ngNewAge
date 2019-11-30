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

@NgModule({
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
export class AppModule { }
