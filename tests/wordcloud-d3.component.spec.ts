import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordcloudD3Component } from '../src/app/modules/shared/components/wordcloud-d3/wordcloud-d3.component';

describe('WordcloudD3Component', () => {
  let component: WordcloudD3Component;
  let fixture: ComponentFixture<WordcloudD3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordcloudD3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(WordcloudD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
