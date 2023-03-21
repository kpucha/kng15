import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavTabsComponent } from '../src/app/modules/layout/components/header/nav-tabs/nav-tabs.component';

describe('NavTabsComponent', () => {
  let component: NavTabsComponent;
  let fixture: ComponentFixture<NavTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavTabsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
