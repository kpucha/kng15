import { Component } from '@angular/core';
import { STUDY } from 'src/app/constants/studies.constants';
import { WORK } from '../../../../../constants/works.constants';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'kng-dash-info',
  templateUrl: './dash-info.component.html',
  styleUrls: ['./dash-info.component.scss'],
})
export class DashInfoComponent {
  panelOpenState = false;
  currentWork = WORK.LIST[0].role + ' @ ' + WORK.LIST[0].company;
  currentStudy = STUDY.LIST[0].name;
}
