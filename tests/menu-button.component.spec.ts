import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuButtonComponent } from '../src/app/modules/layout/components/header/menu-button/menu-button.component';

describe('MenuButtonComponent', () => {
  let component: MenuButtonComponent;
  let fixture: ComponentFixture<MenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
