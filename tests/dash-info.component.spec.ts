import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashInfoComponent } from '../src/app/pages/public/about/components/dash-info/dash-info.component';

describe('DashInfoComponent', () => {
  let component: DashInfoComponent;
  let fixture: ComponentFixture<DashInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
