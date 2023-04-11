import { Component } from '@angular/core';
import { Value } from './shared/components/item-selector/item-selector.component';
import { style, trigger, state } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ktbz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['pl', 'en']);
    this.translateService.setDefaultLang('pl');
  }

  selectorItems: Value<string>[] = [
    { value: 'programming', displayValue: 'Programowanie' },
    { value: 'frameworks', displayValue: 'Frameworki' },
    { value: 'database', displayValue: 'Bazy danych' },
    { value: 'tools', displayValue: 'Narzędzia' },
    { value: 'languages', displayValue: 'Języki' },
    { value: 'other', displayValue: 'Inne' },
  ];
}
