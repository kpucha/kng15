import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  availableLangs: string[] = ['en', 'es'];
  defaultLang: string = 'es';

  constructor(public translate: TranslateService) {
    if (localStorage.getItem('lang') != null) {
      this.defaultLang = localStorage.getItem('lang')!;
      this.translate.use(this.defaultLang);
    }
  }

  initLang() {
    this.translate.addLangs(this.availableLangs);
    this.translate.setDefaultLang(this.defaultLang);
  }

  getCurrentLang() {
    return this.translate.currentLang;
  }

  setLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }
}
