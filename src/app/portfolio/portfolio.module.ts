import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './views/about/about.component';
import { ExperienceEducationComponent } from './views/experience-education/experience-education.component';
import { TranslateModule } from '@ngx-translate/core';
import { GreetingsComponent } from './views/greetings/greetings.component';
import { EducationCertificatesComponent } from './views/education-certificates/education-certificates.component';
import { ExperienceProjectsComponent } from './views/experience-projects/experience-projects.component';
import { ContactComponent } from './views/contact/contact.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    AboutComponent,
    ExperienceEducationComponent,
    GreetingsComponent,
    EducationCertificatesComponent,
    ExperienceProjectsComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    PortfolioRoutingModule,
  ],
})
export class PortfolioModule {}
