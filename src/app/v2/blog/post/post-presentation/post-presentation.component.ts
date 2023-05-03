import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'kng-post-presentation',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './post-presentation.component.html',
  styleUrls: ['./post-presentation.component.scss'],
})
export class PostPresentationComponent {
  @Input() title!: string;
  @Input() tags!: string[];
  @Input() type?: string;

  constructor() {
    if (!this.type) this.type = 'sentiment_very_dissatisfied';
  }
}
