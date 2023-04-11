import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsContainerComponent } from './skills-container.component';
import { TranslateModule } from '@ngx-translate/core';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [SkillsContainerComponent],
  imports: [CommonModule, TranslateModule, IconModule],
  exports: [SkillsContainerComponent],
})
export class SkillsContainerModule {}
