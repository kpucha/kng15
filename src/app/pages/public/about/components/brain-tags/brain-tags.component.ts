import { Component } from '@angular/core';

@Component({
  selector: 'kng-brain-tags',
  templateUrl: './brain-tags.component.html',
  styleUrls: ['./brain-tags.component.scss'],
})
export class BrainTagsComponent {
  tags: string[] = ['angular', 'typescript', 'JAVA'];
}
