import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ktbz-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  private readonly icons = environment.icons;
  private readonly basePath = './assets/icons';

  @Input()
  name: string = '';

  @Input()
  rounded = false;

  get iconPath() {
    const icon = this.icon;
    if (!icon) return '';
    return `${this.basePath}/${icon.prefix}/${icon.name}.svg`;
  }

  get icon() {
    return this.icons.find((i) => i.name === this.name);
  }
}
