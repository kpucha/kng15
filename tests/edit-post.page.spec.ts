import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPostPage } from '../src/app/pages/admin/edit-post/edit-post.page';

describe('EditPostPage', () => {
  let component: EditPostPage;
  let fixture: ComponentFixture<EditPostPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPostPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
