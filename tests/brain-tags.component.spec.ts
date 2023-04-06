import { BrainTagsComponent } from '../src/app/pages/public/about/components/brain-tags/brain-tags.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('BrainTagsComponent', () => {
  let component: BrainTagsComponent;
  let fixture: ComponentFixture<BrainTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrainTagsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrainTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
