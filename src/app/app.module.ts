import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageDownloadComponent } from './page-download/page-download.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PageHeaderComponent,
    PageDownloadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
