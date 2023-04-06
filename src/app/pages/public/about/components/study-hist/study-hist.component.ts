import { Component } from '@angular/core';
import { STUDY } from 'src/app/constants/studies.constants';

@Component({
  selector: 'kng-study-hist',
  templateUrl: './study-hist.component.html',
  styleUrls: ['./study-hist.component.scss'],
})
export class StudyHistComponent {
  displayedColumns: string[] = ['year', 'name', 'certifier'];
  dataSource = STUDY.LIST;
}
