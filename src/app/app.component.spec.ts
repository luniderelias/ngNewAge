import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainNavComponent
      ],
    }).compileComponents();
  }));
  it('should create the AppComponent', async(() => {
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
