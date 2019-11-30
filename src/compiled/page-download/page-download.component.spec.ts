import { TestBed, async } from '@angular/core/testing';
import { PageDownloadComponent } from './page-download.component';
describe('PageDownloadComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageDownloadComponent
      ],
    }).compileComponents();
  }));
  it('should create', async(() => {
    const fixture = TestBed.createComponent(PageDownloadComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
