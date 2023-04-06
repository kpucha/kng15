import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyHistComponent } from '../src/app/pages/public/about/components/study-hist/study-hist.component';

describe('StudyHistComponent', () => {
  let component: StudyHistComponent;
  let fixture: ComponentFixture<StudyHistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyHistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudyHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
