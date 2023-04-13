import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

export interface Value<T> {
  value: T;
  displayValue: string;
}

@Component({
  selector: 'ktbz-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.scss'],
  animations: [
    trigger('selectorAnim', [
      transition('void => *', [
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0)',
        }),
        animate(
          100,
          style({
            height: '*',
            opacity: '*',
          })
        ),
        animate(100, style({ transform: 'scale(1)' })),
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale(0)' })),
        animate(100, style({ opacity: 0, height: 0 })),
      ]),
    ]),
  ],
})
export class ItemSelectorComponent implements OnInit {
  @Input()
  items: Value<string>[] = [];

  @Output()
  onSelectedValue = new EventEmitter<Value<string>>();

  // @HostListener('wheel', ['$event'])
  // onScroll(event: WheelEvent) {
  //   if (event.deltaY === 100) {
  //     const nextItem =
  //       this.selectedIndex === this.items.length - 1
  //         ? this.items[this.selectedIndex]
  //         : this.items[this.selectedIndex + 1];
  //     this.select(nextItem);
  //   } else {
  //     const nextItem =
  //       this.selectedIndex === 0
  //         ? this.items[this.selectedIndex]
  //         : this.items[this.selectedIndex - 1];
  //     this.select(nextItem);
  //   }
  // }

  displayItems: Value<string>[] = [];

  selected!: Value<string>;

  constructor() {}

  ngOnInit(): void {
    this.displayItems = this.items.slice(0, 4);
    this.selected = this.items[0];
    // console.log(this.displayItems);
    // this.selected = this.items[0];
  }

  sel(item: Value<string>) {
    const idx = this.items.findIndex((i) => i.value === item.value);
    const from = idx - 3;
    const to = idx + 4;
    this.displayItems = this.items.slice(from < 0 ? 0 : from, to);
    this.selected = item;
  }

  getClass(item: Value<string>) {
    const itemIndex = this.findIndex(item);

    if (this.selectedIndex === itemIndex) return 'selected';
    else {
      const diff = Math.abs(this.selectedIndex - itemIndex);
      return diff < 4 ? `level-${diff}` : 'level-0';
    }
  }

  select(item: Value<string>) {
    this.selected = item;
    this.onSelectedValue.emit(this.selected);
  }

  private findIndex(item: Value<string>) {
    return this.items.findIndex((i) => i.value === item.value);
  }

  private get selectedIndex() {
    return this.findIndex(this.selected);
  }
}
