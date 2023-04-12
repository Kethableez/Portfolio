import { Component, OnInit } from '@angular/core';
import { RichContentData } from 'src/app/shared/components/rich-content/rich-content.component';

@Component({
  selector: 'ktbz-experience-education',
  templateUrl: './experience-education.component.html',
  styleUrls: ['./experience-education.component.scss'],
})
export class ExperienceEducationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  experienceData: RichContentData = {
    image: './assets/img/logo-comarch.png',
    headers: {
      main: 'Frontend Developer',
    },
    dates: {
      from: new Date(2022, 6, 1),
      to: 'current',
    },
    sections: {
      paragraph:
        'Rozwój oprogramowania SelfCare dla klientów z sektora telekomunikacji przy wykorzystaniu frameworka Angular oraz metodyki Scrum.',
    },
  };

  educationData: RichContentData[] = [
    {
      image: './assets/img/logo-pwr.png',
      headers: {
        main: 'Informatyka Techniczna II st.',
        sub: 'Inżynieria Systemów Informatycznych',
        line: 'Politechnika Wrocławska',
      },
      dates: {
        from: new Date(2022, 2, 1),
        to: 'current',
      },
    },
    {
      image: './assets/img/logo-pwr.png',
      headers: {
        main: 'Automatyka I Robotyka I st.',
        sub: 'Przemysł 4.0',
        line: 'Politechnika Wrocławska',
      },
      dates: {
        from: new Date(2018, 9, 1),
        to: new Date(2022, 1, 1),
      },
    },
    {
      image: './assets/img/logo-zsel.png',
      headers: {
        main: 'Mechatronika',
        line: 'Zespół Szkół Elektrycznych w Opolu',
      },
      dates: {
        from: new Date(2014, 8, 1),
        to: new Date(2018, 4, 1),
      },
      sections: {
        list: [
          'Nagroda dyrektora za wyjątkowe osiągnięcia',
          'Laureat konkursu „e-Portfolio”',
          'II miejsce w konkursie „Design Thinking”',
        ],
      },
    },
  ];
}
