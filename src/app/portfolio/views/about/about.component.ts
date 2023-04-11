import { Component, OnInit } from '@angular/core';
import { Value } from 'src/app/shared/components/item-selector/item-selector.component';

@Component({
  selector: 'ktbz-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  skillGroupSelector = 'programming';

  selectorItems: Value<string>[] = [
    { value: 'programming', displayValue: 'Programming' },
    { value: 'frameworks', displayValue: 'Frameworks' },
    { value: 'databases', displayValue: 'Databases' },
    { value: 'tools', displayValue: 'Tools' },
    { value: 'languages', displayValue: 'Languages' },
    { value: 'other', displayValue: 'Other' },
  ];

  handleSkillGroupSelected(group: Value<string>) {
    this.skillGroupSelector = group.value;
  }
}
