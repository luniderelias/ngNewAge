import { TestBed, async } from '@angular/core/testing';
import { PageFooterComponent } from './page-footer.component';
describe('PageFooterComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageFooterComponent
      ],
    }).compileComponents();
  }));
  it('should create', async(() => {
    const fixture = TestBed.createComponent(PageFooterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
