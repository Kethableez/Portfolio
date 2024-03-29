import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { LanguageSelectorModule } from '../language-selector/language-selector.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    LanguageSelectorModule,
  ],
  exports: [NavigationComponent],
})
export class NavigationModule {}
