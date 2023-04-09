import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'kng-switch',
  templateUrl: './switch.component.html',
})
export class SwitchComponent implements OnInit {
  private classOn: string = 'light-on';
  private classOff: string = 'light-off';
  lightsOn: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public translate: TranslateService
  ) {
    this.lightsOn = localStorage.getItem('kng-lights') === 'true';
  }

  ngOnInit(): void {
    this.changeClasses();
  }

  switchLight() {
    this.lightsOn = !this.lightsOn;
    localStorage.setItem('kng-lights', JSON.stringify(this.lightsOn));
    this.changeClasses();
  }

  changeClasses() {
    if (this.lightsOn === false) {
      this.renderer.addClass(this.document.body, this.classOff);
      this.renderer.removeClass(this.document.body, this.classOn);
    } else {
      this.renderer.addClass(this.document.body, this.classOn);
      this.renderer.removeClass(this.document.body, this.classOff);
    }
  }
}
