import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPresentationComponent } from './post-presentation.component';

describe('PostPresentationComponent', () => {
  let component: PostPresentationComponent;
  let fixture: ComponentFixture<PostPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PostPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
