import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollableContentComponent } from './scrollable-content.component';
import { RichContentModule } from '../rich-content/rich-content.module';

@NgModule({
  declarations: [ScrollableContentComponent],
  imports: [CommonModule, RichContentModule],
  exports: [ScrollableContentComponent],
})
export class ScrollableContentModule {}
