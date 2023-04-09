import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostPage } from '../src/app/pages/public/post/post.page';

describe('PostPage', () => {
  let component: PostPage;
  let fixture: ComponentFixture<PostPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
