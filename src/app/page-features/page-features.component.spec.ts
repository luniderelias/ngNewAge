import { TestBed, async } from '@angular/core/testing';
import { PageFeaturesComponent } from './page-features.component';
describe('PageFeaturesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageFeaturesComponent
      ],
    }).compileComponents();
  }));
  it('should create', async(() => {
    const fixture = TestBed.createComponent(PageFeaturesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
