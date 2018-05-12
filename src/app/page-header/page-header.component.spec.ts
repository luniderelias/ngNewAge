import { TestBed, async } from '@angular/core/testing';
import { PageHeaderComponent } from './page-header.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageHeaderComponent
      ],
    }).compileComponents();
  }));
  it('should create the PageHeaderComponent', async(() => {
    const fixture = TestBed.createComponent(PageHeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
