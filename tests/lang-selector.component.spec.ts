import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LangSelectorComponent } from '../src/app/modules/i18n/components/lang-selector/lang-selector.component';

describe('LangSelectorComponent', () => {
  let component: LangSelectorComponent;
  let fixture: ComponentFixture<LangSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LangSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LangSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
