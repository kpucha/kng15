import { Component } from '@angular/core';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'kng-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faStackOverflow = faStackOverflow;
  faInstagram = faInstagram;

  openUrl(url: string) {
    window.open(url, '_blank');
  }
}
