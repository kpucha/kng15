import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedGithubComponent } from './embed-github.component';

describe('EmbedGithubComponent', () => {
  let component: EmbedGithubComponent;
  let fixture: ComponentFixture<EmbedGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbedGithubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbedGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
