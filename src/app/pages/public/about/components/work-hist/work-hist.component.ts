import { Component } from '@angular/core';
import { WORK } from 'src/app/constants/works.constants';
import { Work } from 'src/app/interfaces/work.interface';

@Component({
  selector: 'kng-work-hist',
  templateUrl: './work-hist.component.html',
  styleUrls: ['./work-hist.component.scss'],
})
export class WorkHistComponent {
  dataSource = WORK.LIST;
  displayedColumns = ['initDate', 'endDate', 'role', 'company'];

  public aniosExp(fecha1: Date, fecha2?: Date): number {
    if (fecha2 == undefined) fecha2 = new Date();
    const diffEnMs = Math.abs(fecha2.getTime() - fecha1.getTime());
    const anios = diffEnMs / (1000 * 60 * 60 * 24 * 365.25);
    return parseFloat(anios.toFixed(2));
  }

  public totalExp(): number {
    let anios = 0;
    for (let index = 0; index < this.dataSource.length; index++) {
      const element = this.dataSource[index];
      anios += this.aniosExp(element.initDate, element.endDate);
    }
    return parseFloat(anios.toFixed(2));
  }
}
