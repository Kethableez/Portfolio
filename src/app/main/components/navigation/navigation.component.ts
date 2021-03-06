import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Language } from 'src/app/core/models/language.model';
import { PageType } from 'src/app/core/models/page-type.model';
import { Theme } from 'src/app/core/models/theme.model';
import { SettingService } from 'src/app/core/services/setting.service';
import { AppActions, getTheme } from 'src/app/core/store/app';
import { RootState } from 'src/app/core/store/root.state';

@Component({
  selector: 'ktbz-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() currentPage!: PageType;

  theme$ = this.store$.select(getTheme);

  constructor(
    private settings: SettingService,
    private store$: Store<RootState>
  ) {}

  ngOnInit(): void {}

  get PageType() {
    return PageType;
  }

  isSectionVisible(page: PageType) {
    return page === this.currentPage;
  }

  isFilled(page: PageType) {
    return this.isSectionVisible(page) ? 'fill' : '';
  }

  changeLang() {
    const lang =
      this.settings.currentLang === Language.PL ? Language.EN : Language.PL;
    this.store$.dispatch(AppActions.setLanguage({ language: lang }));
  }

  changeTheme(currentTheme: string) {
    const theme = currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    this.store$.dispatch(AppActions.setTheme({ theme: theme }));
  }
}
