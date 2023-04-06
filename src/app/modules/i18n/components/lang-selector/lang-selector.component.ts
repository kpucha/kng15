import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../i18n.service';

@Component({
  selector: 'kng-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss'],
})
export class LangSelectorComponent implements OnInit {
  constructor(private lang: I18nService) {}

  availableLangs: string[] = this.lang.availableLangs;
  currentLang: string = this.lang.getCurrentLang();

  ngOnInit(): void {}

  setLang(lang: string) {
    this.lang.setLang(lang);
  }
}
