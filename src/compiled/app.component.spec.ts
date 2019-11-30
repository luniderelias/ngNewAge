import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageDownloadComponent } from './page-download/page-download.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageCtaComponent } from './page-cta/page-cta.component';
import { PageFeaturesComponent } from './page-features/page-features.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainNavComponent,
        PageHeaderComponent,
        PageDownloadComponent,
        PageContactComponent,
        PageCtaComponent,
        PageFeaturesComponent,
        PageFooterComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Start Bootstrap'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Start Bootstrap');
  }));
});
