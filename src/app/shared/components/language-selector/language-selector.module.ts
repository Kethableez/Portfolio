import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectorComponent } from './language-selector.component';
import { IconModule } from '../icon/icon.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LanguageSelectorComponent],
  imports: [CommonModule, IconModule, TranslateModule],
  exports: [LanguageSelectorComponent],
})
export class LanguageSelectorModule {}
