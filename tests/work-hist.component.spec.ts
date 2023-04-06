import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkHistComponent } from '../src/app/pages/public/about/components/work-hist/work-hist.component';

describe('WorkHistComponent', () => {
  let component: WorkHistComponent;
  let fixture: ComponentFixture<WorkHistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
