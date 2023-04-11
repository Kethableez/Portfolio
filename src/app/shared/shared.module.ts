import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from './components/icon/icon.module';
import { ItemSelectorModule } from './components/item-selector/item-selector.module';
import { NavigationModule } from './components/navigation/navigation.module';
import { QuickLinksModule } from './components/quick-links/quick-links.module';
import { TranslateModule } from '@ngx-translate/core';
import { SkillsContainerModule } from './components/skills-container/skills-container.module';

@NgModule({
  declarations: [],
  imports: [
    ItemSelectorModule,
    NavigationModule,
    IconModule,
    QuickLinksModule,
    TranslateModule,
    CommonModule,
    SkillsContainerModule,
  ],
  exports: [
    ItemSelectorModule,
    NavigationModule,
    IconModule,
    QuickLinksModule,
    SkillsContainerModule,
  ],
})
export class SharedModule {}
