import { Component, Input, OnInit } from '@angular/core';

export interface RichContentData {
  image?: string;
  headers: {
    main: string;
    sub?: string;
    line?: string;
  };
  date?: Date;
  dates?: {
    from: Date;
    to: Date | string;
  };
  sections?: {
    keyValueItems?: { key: string; value: string }[];
    paragraph?: string;
    list?: string[];
  };
}

@Component({
  selector: 'ktbz-rich-content',
  templateUrl: './rich-content.component.html',
  styleUrls: ['./rich-content.component.scss'],
})
export class RichContentComponent implements OnInit {
  @Input()
  data: RichContentData = {
    image: './assets/img/logo-comarch.png',
    headers: {
      main: 'Informatyka Techniczna II st.',
      sub: 'Inżynieria Systemów Informatycznych',
      line: 'Politechnika Wrocławska',
    },
    dates: {
      from: new Date(2022, 2, 1),
      to: 'current',
    },
    sections: {
      paragraph:
        'Rozwój oprogramowania SelfCare dla klientów z sektora telekomunikacji przy wykorzystaniu frameworka Angular oraz metodyki Scrum.',
      list: [
        'Rozwój pudełkowej wersji oprogramowania Selfcare',
        'Implementacja logiki oraz widoków na podstawie makiet w Figmie',
        'Implementacja zgodnie z określonymi wymaganiami na podstawie Tasków w Jira',
      ],
      keyValueItems: [
        { key: 'Firma', value: 'Comarch' },
        { key: 'Klient', value: '-' },
        { key: 'Dział', value: 'Telekom' },
        { key: 'Rola', value: 'Frontend Developer' },
        { key: 'Technologie', value: 'Angular, Figma, Jira, Git' },
      ],
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
