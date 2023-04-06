import { Project } from './project.interface';

export interface Work {
  role: string;
  company: string;
  projects: Project[];
  initDate: Date;
  endDate?: Date;
}
