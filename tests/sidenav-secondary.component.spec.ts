import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidenavSecondaryComponent } from '../src/app/modules/layout/components/sidenav/sidenav-secondary/sidenav-secondary.component';

describe('SidenavSecondaryComponent', () => {
  let component: SidenavSecondaryComponent;
  let fixture: ComponentFixture<SidenavSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavSecondaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
