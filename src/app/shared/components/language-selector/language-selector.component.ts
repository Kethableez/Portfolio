import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ktbz-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  selectedLanguage = 'pl';

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {}

  changeLanguage() {
    this.selectedLanguage = this.selectedLanguage === 'pl' ? 'en' : 'pl';
    this.translateService.use(this.selectedLanguage);

    console.log(this.selectedLanguage, this.translateService.currentLang);
  }

  get iconName() {
    return `${this.selectedLanguage}-sm`;
  }
}
