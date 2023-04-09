import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CookiesPolicyPage } from '../src/app/pages/public/cookies-policy/cookies-policy.page';

describe('CookiesPolicyPage', () => {
  let component: CookiesPolicyPage;
  let fixture: ComponentFixture<CookiesPolicyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CookiesPolicyPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CookiesPolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
