import { Component, OnInit } from '@angular/core';
import { RichContentData } from 'src/app/shared/components/rich-content/rich-content.component';

@Component({
  selector: 'ktbz-education-certificates',
  templateUrl: './education-certificates.component.html',
  styleUrls: ['./education-certificates.component.scss'],
})
export class EducationCertificatesComponent implements OnInit {
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

  certificatesData: RichContentData[] = [
    {
      headers: {
        main: 'CKE',
      },
      date: new Date(2018, 0, 1),
      sections: {
        paragraph:
          'E.19 - Projektowanie i programowanie urządzeń i systemów mechatronicznych',
      },
    },
    {
      headers: {
        main: 'SME Training',
      },
      date: new Date(2017, 11, 1),
      sections: {
        paragraph: 'Kurs programowania C++',
      },
    },
    {
      headers: {
        main: 'CKE',
      },
      date: new Date(2017, 0, 1),
      sections: {
        paragraph: 'E.18 – Eksploatacja urządzeń i systemów mechatronicznych',
      },
    },
    {
      headers: {
        main: 'CKE',
      },
      date: new Date(2017, 0, 1),
      sections: {
        paragraph: 'E.03 – Montaż urządzeń i systemów mechatronicznych',
      },
    },
    {
      headers: {
        main: 'P.A. Nova S.A',
      },
      date: new Date(2017, 0, 1),
      sections: {
        paragraph: 'Kurs rysunku technicznego AutoCAD',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
