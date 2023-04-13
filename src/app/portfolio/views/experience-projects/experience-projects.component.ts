import { Component, OnInit } from '@angular/core';
import { RichContentData } from 'src/app/shared/components/rich-content/rich-content.component';

@Component({
  selector: 'ktbz-experience-projects',
  templateUrl: './experience-projects.component.html',
  styleUrls: ['./experience-projects.component.scss'],
})
export class ExperienceProjectsComponent implements OnInit {
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

  projectsData: RichContentData[] = [
    {
      headers: { main: 'Selfcare COTS' },
      dates: { from: new Date(2023, 0, 1), to: 'current' },
      sections: {
        keyValueItems: [
          { key: 'Firma', value: 'Comarch' },
          { key: 'Klient', value: '-' },
          { key: 'Dział', value: 'Telekom' },
          { key: 'Rola', value: 'Frontend Developer' },
          { key: 'Technologie', value: 'Angular, Figma, Jira, Git' },
        ],
        paragraph:
          'Rozwój „pudełkowej” wersji oprogramowania Selfcare. Moim zadaniem jest implementacja logiki oraz widoków na podstawie makiet w Figmie zgodnie z określonymi wcześniej wymaganiami.',
      },
    },
    {
      headers: { main: 'Facer' },
      dates: { from: new Date(2023, 2, 1), to: 'current' },
      sections: {
        keyValueItems: [
          { key: 'Cel', value: 'Praca Magisterska' },
          { key: 'Rola', value: 'Fullstack Developer' },
          {
            key: 'Technologie',
            value:
              'Angular, Nest.JS, Flask, Typescript, Python, Docker, RabbitMQ, MongoDB, Git',
          },
        ],
        paragraph:
          'Aplikacja internetowa do pracy magisterskiej, w której skupiam się na analizie wykorzystania sztucznej inteligencji z zakresu rozpoznawania twarzy jako metody uwierzytelniania użytkowników',
      },
    },
    {
      headers: { main: 'Filmappka' },
      dates: { from: new Date(2022, 9, 1), to: new Date(2023, 0, 1) },
      sections: {
        keyValueItems: [
          { key: 'Cel', value: 'Studia' },
          {
            key: 'Rola',
            value: 'Implementacja sztucznej inteligencji, DevOps',
          },
          {
            key: 'Technologie',
            value: 'Python, FaceRecognition, TensorFlow, MongoDB, Git',
          },
        ],
        paragraph:
          'Aplikacja internetowa służąca do wyboru filmu w zależności od emocji użytkownika. Moim zadaniem było stworzenie API, które umożliwiało rozpoznawanie użytkowników na podstawie zdjęcia twarzy oraz rozpoznawanie emocji użytkowników. Dodatkowo zajmowałem się konteneryzacją samej aplikacji jak i utrzymaniem repozytorium kodu wraz z członkami zespołu.',
      },
    },
    {
      headers: { main: 'Selfcare' },
      dates: { from: new Date(2022, 8, 1), to: new Date(2022, 9, 1) },
      sections: {
        keyValueItems: [
          { key: 'Firma', value: 'Comarch' },
          { key: 'Klient', value: 'Quickline' },
          { key: 'Dział', value: 'Telekom' },
          { key: 'Rola', value: 'Frontend Developer' },
          { key: 'Technologie', value: 'Angular, Jira, Git' },
        ],
        paragraph:
          'Rozwój oprogramowania Selfcare dla Quickline. Moim zadaniem była implementacja logiki User Stories z uwzględnieniem wymagań opisanych w zadaniach. Okazjonalnie wykonywałem również code review',
      },
    },
    {
      headers: { main: 'AnyTravel' },
      dates: { from: new Date(2022, 1, 1), to: new Date(2022, 5, 1) },
      sections: {
        keyValueItems: [
          { key: 'Cel', value: 'Studia' },
          { key: 'Rola', value: 'Fullstack Developer, Team Leader' },
          {
            key: 'Technologie',
            value: 'Angular, NodeJS, MongoDB, Docker, Git, Nginx',
          },
        ],
        paragraph:
          'Aplikacja internetowa służąca do planowania wspólnych wycieczek w grupie znajomych. Wspólnie z członkami zespołu pracowaliśmy nad rozwojem aplikacji. Dodatkowo moim zadaniem było zarządzanie zespołem oraz wsparcie merytoryczne dla osób, które pierwszy raz zetknęły się z dana technologią. Oprócz tego zajmowałem się również konteneryzacją aplikacji i zarządzaniem repozytorium',
      },
    },
    {
      headers: { main: 'Walker' },
      dates: { from: new Date(2021, 5, 1), to: new Date(2021, 11, 1) },
      sections: {
        keyValueItems: [
          { key: 'Cel', value: 'Praca Inżynierska' },
          { key: 'Rola', value: 'Fullstack Developer' },
          {
            key: 'Technologie',
            value: 'Angular, Java, SpringBoot, Git, MongoDB',
          },
        ],
        paragraph:
          'Aplikacja internetowa do pracy inżynierskiej. Jej celem było stworzenie platformy dla miłośników psów. Aplikacja zrzeszała dwie grupy – właścicieli czworonogów, którzy nie mają czasu wychodzić na spacer ze swoim pupilem oraz opiekunów, którzy deklarowali swoją chęć pomocy przy wyprowadzaniu zwierząt na spacer a jej zadaniem było umawianie osób na spacery z psami w potrzebie.',
      },
    },
    {
      headers: { main: 'Selfcare/E-shop' },
      dates: { from: new Date(2021, 6, 1), to: new Date(2022, 6, 1) },
      sections: {
        keyValueItems: [
          { key: 'Firma', value: 'Comarch' },
          { key: 'Klient', value: 'Orange Reunion' },
          { key: 'Dział', value: 'Telekom' },
          { key: 'Rola', value: 'Frontend Developer' },
          { key: 'Technologie', value: 'Angular, Jira, Git' },
        ],
        paragraph:
          'Rozwój oprogramowania Selfcare/E-shop dla klienta Orange Reunion. Moim zadaniem była implementacja User Stories zgodnie z podanymi wymaganiami. Dodatkowo zajmowałem się również poprawianiem bugfixingiem oraz testami manualnymi samej aplikacji.',
      },
    },
    {
      headers: { main: 'Tuziemiec' },
      dates: { from: new Date(2021, 2, 1), to: new Date(2021, 5, 1) },
      sections: {
        keyValueItems: [
          { key: 'Cel', value: 'Studia/KPZ' },
          { key: 'Rola', value: 'Fullstack Developer, Team Leader' },
          {
            key: 'Technologie',
            value: 'Angular, Java, SpringBoot, MySQL, Docker, Nginx, Git',
          },
        ],
        paragraph:
          'Aplikacja internetowa, której celem było stworzenie platformy oferującej wycieczki organizowane przez lokalnych przewodników. W tym projekcie po raz pierwszy zetknąłem się z technologiami do tworzenia aplikacji internetowych jak i wiedzą na temat kierowania zespołem oraz metodologią Scrum.',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
