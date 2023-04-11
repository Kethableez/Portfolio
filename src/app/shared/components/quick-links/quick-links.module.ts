import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickLinksComponent } from './quick-links.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [QuickLinksComponent],
  imports: [CommonModule, IconModule],
  exports: [QuickLinksComponent],
})
export class QuickLinksModule {}
