import { ActionButtonsComponent } from '../src/app/modules/shared/components/action-buttons/action-buttons.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ActionButtonsComponent', () => {
  let component: ActionButtonsComponent;
  let fixture: ComponentFixture<ActionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
