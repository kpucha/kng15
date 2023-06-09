import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GitgraphCvComponent } from '../src/app/pages/public/about/components/gitgraph-cv/gitgraph-cv.component';

describe('GitgraphCvComponent', () => {
  let component: GitgraphCvComponent;
  let fixture: ComponentFixture<GitgraphCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GitgraphCvComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GitgraphCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
