import { AdsHorizontalComponent } from '../src/app/modules/ads/components/ads-horizontal/ads-horizontal.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AdsHorizontalComponent', () => {
  let component: AdsHorizontalComponent;
  let fixture: ComponentFixture<AdsHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdsHorizontalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdsHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
