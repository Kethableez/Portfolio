import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './main/app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LandingComponent } from './main/pages/landing/landing.component';
import { BlobComponent } from './main/components/blob/blob.component';
import { BlobsComponent } from './main/components/blobs/blobs.component';
import { ImageComponent } from './main/components/image/image.component';
import { NavigationComponent } from './main/components/navigation/navigation.component';
import { AboutComponent } from './main/pages/about/about.component';
import { SkillsComponent } from './main/components/skills/skills.component';
import { SkillComponent } from './main/components/skill/skill.component';
import { EducationComponent } from './main/pages/education/education.component';
import { ExperienceComponent } from './main/pages/experience/experience.component';
import { ProjectsComponent } from './main/pages/projects/projects.component';
import { ContactComponent } from './main/pages/contact/contact.component';
import { EduBoxComponent } from './main/components/edu-box/edu-box.component';
import { ExpBoxComponent } from './main/components/exp-box/exp-box.component';
import { ProjectBoxComponent } from './main/components/project-box/project-box.component';
import { BoxDirective } from './main/components/box.directive';
import { EducationStateModule } from './core/store/education';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ExperienceStateModule } from './core/store/experience';
import { ProjectStateModule } from './core/store/projects';
import { AppStateModule } from './core/store/app/app-state.module';
import { InitService } from './core/services/init.service';
import { DetailsDirective } from './main/components/details.directive';
import { EducationDetailsComponent } from './main/components/education-details/education-details.component';
import { ExperienceDetailsComponent } from './main/components/experience-details/experience-details.component';
import { ProjectDetailsComponent } from './main/components/project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BlobComponent,
    BlobsComponent,
    ImageComponent,
    NavigationComponent,
    AboutComponent,
    SkillsComponent,
    SkillComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    EduBoxComponent,
    ExpBoxComponent,
    ProjectBoxComponent,
    BoxDirective,
    EducationDetailsComponent,
    ExperienceDetailsComponent,
    ProjectDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    EducationStateModule,
    ExperienceStateModule,
    ProjectStateModule,
    AppStateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  exports: [TranslateModule],
  providers: [
    InitService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInit,
      deps: [InitService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

export function appInit(initService: InitService) {
  return () => initService.load();
}
