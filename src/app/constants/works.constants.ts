import { Project } from '../interfaces/project.interface';
import { Work } from '../interfaces/work.interface';

export class WORK {
  public static LIST: Work[] = [
    {
      initDate: new Date('2019-08-01'),
      endDate: undefined,
      role: 'Senior Software Engineer',
      company: 'Laude Tech',
      projects: [
        {
          initDate: new Date('2022-02-01'),
          endDate: undefined,
          client: 'El Corte Inglés',
          name: 'EDP',
          tags: [],
        },
        {
          initDate: new Date('2020-11-01'),
          endDate: new Date('2022-02-01'),
          client: 'BBVA',
          name: 'Hammer',
          tags: [],
        },
        {
          initDate: new Date('2019-08-01'),
          endDate: new Date('2020-11-01'),
          client: 'Iberdrola',
          name: 'CVMC',
          tags: [],
        },
      ],
    },
    {
      initDate: new Date('2017-12-01:00:00:00'),
      endDate: new Date('2019-08-31:00:00:00'),
      role: 'CTO & Founder',
      company: 'Direct Market Group',
      projects: [],
    },
    {
      initDate: new Date('2017-03-01:00:00:00'),
      endDate: new Date('2017-11-30:00:00:00'),
      role: 'CTO',
      company: 'Imperial Eagle Group',
      projects: [],
    },
    {
      initDate: new Date('2017-01-01:00:00:00'),
      endDate: new Date('2017-03-31:00:00:00'),
      role: 'Tech Lead',
      company: 'Sngular',
      projects: [],
    },
    {
      initDate: new Date('2014-09-01:00:00:00'),
      endDate: new Date('2017-01-31:00:00:00'),
      role: 'Analyst Developer',
      company: 'Ibermática',
      projects: [],
    },
    {
      initDate: new Date('2010-06-01:00:00:00'),
      endDate: new Date('2014-09-01:00:00:00'),
      role: 'Senior Developer',
      company: 'Mensoft',
      projects: [],
    },
    {
      initDate: new Date('2009-09-01:00:00:00'),
      endDate: new Date('2010-03-01:00:00:00'),
      role: 'Junior Developer',
      company: 'Pentasys',
      projects: [],
    },
    {
      initDate: new Date('2009-01-01:00:00:00'),
      endDate: new Date('2009-05-01:00:00:00'),
      role: 'Tech & Junior Developer',
      company: 'Ibersaf',
      projects: [],
    },
    {
      initDate: new Date('2004-10-01:00:00:00'),
      endDate: new Date('2008-05-31:00:00:00'),
      role: 'Broker',
      company: 'Improvink',
      projects: [],
    },
  ];
}
