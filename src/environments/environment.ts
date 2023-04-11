// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const quickLinks = [
  {
    url: 'https://github.com/Kethableez',
    icon: 'github',
  },
  {
    url: 'https://www.linkedin.com/in/amadeusz-janiszyn/',
    icon: 'linkedin',
  },
];

const routes = [
  {
    path: '/portfolio',
    fragments: [
      {
        value: 'about',
        displayValue: 'Navigation.About',
      },
      {
        value: 'experience-education',
        displayValue: 'Navigation.ExperienceEducation',
      },
      {
        value: 'projects',
        displayValue: 'Navigation.Projects',
      },
      {
        value: 'contact',
        displayValue: 'Navigation.Contact',
      },
    ],
  },
  {
    path: '/resume',
    displayValue: 'Navigation.Resume',
  },
];

const skills: { [key: string]: { name: string; icon: string }[] } = {
  programming: [
    {
      name: 'Typescript',
      icon: 'typescript',
    },
    {
      name: 'Python',
      icon: 'python',
    },
    {
      name: 'Cpp',
      icon: 'cpp',
    },
    {
      name: 'Latex',
      icon: 'latex',
    },
    {
      name: 'HTML',
      icon: 'html',
    },
    {
      name: 'CSS',
      icon: 'css',
    },
    {
      name: 'Sass',
      icon: 'sass',
    },
  ],
  frameworks: [
    {
      name: 'Angular',
      icon: 'angular',
    },
    {
      name: 'NodeJS',
      icon: 'nodejs',
    },
    {
      name: 'ExpressJS',
      icon: 'express',
    },
    {
      name: 'NestJS',
      icon: 'nestjs',
    },
  ],
  databases: [
    {
      name: 'MongoDB',
      icon: 'mongodb',
    },
    {
      name: 'MySQL',
      icon: 'mysql',
    },
  ],
  tools: [
    {
      name: 'VSCode',
      icon: 'vscode',
    },
    {
      name: 'Neovim',
      icon: 'neovim',
    },
    {
      name: 'Git',
      icon: 'git',
    },
    {
      name: 'Docker',
      icon: 'docker',
    },
    {
      name: 'Nginx',
      icon: 'nginx',
    },
    {
      name: 'Jira',
      icon: 'jira',
    },
    {
      name: 'RabbitMQ',
      icon: 'rabbitmq',
    },
    {
      name: 'NgRX',
      icon: 'reactivex',
    },
    {
      name: 'RxJS',
      icon: 'reactivex',
    },
    {
      name: 'Linux',
      icon: 'linux',
    },
    {
      name: 'Figma',
      icon: 'figma',
    },
  ],
  other: [
    {
      name: 'FunctionalProgramming',
      icon: 'code',
    },
    {
      name: 'TeamLeading',
      icon: 'people',
    },
    {
      name: 'TeamWork',
      icon: 'people',
    },
    {
      name: 'Scrum',
      icon: 'puzzle',
    },
  ],
  languages: [
    {
      name: 'English',
      icon: 'en',
    },
    {
      name: 'German',
      icon: 'de',
    },
    {
      name: 'Russian',
      icon: 'ru',
    },
  ],
};

const icons = [
  {
    name: 'github',
    prefix: '24',
  },
  {
    name: 'linkedin',
    prefix: '24',
  },
  {
    name: 'angular',
    prefix: '72',
  },
  {
    name: 'code',
    prefix: '72',
  },
  {
    name: 'cpp',
    prefix: '72',
  },
  {
    name: 'css',
    prefix: '72',
  },
  {
    name: 'docker',
    prefix: '72',
  },
  {
    name: 'express',
    prefix: '72',
  },
  {
    name: 'figma',
    prefix: '72',
  },
  {
    name: 'git',
    prefix: '72',
  },
  {
    name: 'html',
    prefix: '72',
  },
  {
    name: 'jira',
    prefix: '72',
  },
  {
    name: 'latex',
    prefix: '72',
  },
  {
    name: 'linux',
    prefix: '72',
  },
  {
    name: 'mongodb',
    prefix: '72',
  },
  {
    name: 'mysql',
    prefix: '72',
  },
  {
    name: 'neovim',
    prefix: '72',
  },
  {
    name: 'nestjs',
    prefix: '72',
  },
  {
    name: 'nginx',
    prefix: '72',
  },
  {
    name: 'nodejs',
    prefix: '72',
  },
  {
    name: 'people',
    prefix: '72',
  },
  {
    name: 'puzzle',
    prefix: '72',
  },
  {
    name: 'python',
    prefix: '72',
  },
  {
    name: 'rabbitmq',
    prefix: '72',
  },
  {
    name: 'reactivex',
    prefix: '72',
  },
  {
    name: 'sass',
    prefix: '72',
  },
  {
    name: 'typescript',
    prefix: '72',
  },
  {
    name: 'vscode',
    prefix: '72',
  },
  {
    name: 'de',
    prefix: 'flags',
  },
  {
    name: 'pl',
    prefix: 'flags',
  },
  {
    name: 'pl-sm',
    prefix: 'flags',
  },
  {
    name: 'ru',
    prefix: 'flags',
  },
  {
    name: 'en',
    prefix: 'flags',
  },
  {
    name: 'en-sm',
    prefix: 'flags',
  },
];

export const environment = {
  icons: icons,
  routes: routes,
  skills: skills,
  quickLinks: quickLinks,
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
