import { AdsSkyscraperComponent } from '../src/app/modules/ads/components/ads-skyscraper/ads-skyscraper.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AdsSkyscraperComponent', () => {
  let component: AdsSkyscraperComponent;
  let fixture: ComponentFixture<AdsSkyscraperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdsSkyscraperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdsSkyscraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
