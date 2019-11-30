import { TestBed, async } from '@angular/core/testing';
import { PageContactComponent } from './page-contact.component';
describe('PageContactComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageContactComponent
      ],
    }).compileComponents();
  }));
  it('should create', async(() => {
    const fixture = TestBed.createComponent(PageContactComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
