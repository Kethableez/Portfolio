import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemSelectorComponent } from './item-selector.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ItemSelectorComponent],
  imports: [CommonModule, TranslateModule],
  exports: [ItemSelectorComponent],
})
export class ItemSelectorModule {}
