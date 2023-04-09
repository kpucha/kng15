import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Component } from '@angular/core';

@Component({
  selector: 'kng-wordcloud-d3',
  templateUrl: './wordcloud-d3.component.html',
  styleUrls: ['./wordcloud-d3.component.scss'],
})
export class WordcloudD3Component {
  data = [
    'Hello',
    'world',
    'normally',
    'you',
    'want',
    'more',
    'words',
    'than',
    'this',
    'two words',
    'test',
  ].map(function (d) {
    return { text: d, value: 10 + Math.random() * 50 };
  });

  onWorkClick(event: any) {
    alert(event);
  }

  getRandomRotation() {
    return (Math.random() * 6 - 3) * 30;
  }
}
