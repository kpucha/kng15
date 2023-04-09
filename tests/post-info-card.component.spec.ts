import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostInfoCardComponent } from '../src/app/modules/shared/components/post-info-card/post-info-card.component';

describe('PostInfoCardComponent', () => {
  let component: PostInfoCardComponent;
  let fixture: ComponentFixture<PostInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostInfoCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
