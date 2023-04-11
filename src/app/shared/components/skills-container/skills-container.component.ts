import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ktbz-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.scss'],
})
export class SkillsContainerComponent implements OnInit, OnChanges {
  private readonly skillsGroups = environment.skills;

  @Input()
  skillGroupSelector = 'programming';

  skillsGroup!: {
    name: string;
    icon: string;
  }[];

  constructor() {}

  ngOnInit(): void {
    this.selectGroup();
    console.log(this.skillsGroup);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['skillGroupSelector'].isFirstChange()) {
      this.selectGroup();
    }
  }

  selectGroup() {
    this.skillsGroup = this.skillsGroups[this.skillGroupSelector];
  }
}
