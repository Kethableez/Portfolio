import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { RichContentData } from '../rich-content/rich-content.component';

@Component({
  selector: 'ktbz-scrollable-content',
  templateUrl: './scrollable-content.component.html',
  styleUrls: ['./scrollable-content.component.scss'],
  animations: [
    trigger('contentAnim', [
      transition('void => *', [
        style({
          height: 0,
          width: 0,
          opacity: 0,
          'overflow-y': 'hidden',
        }),
        animate(
          '100ms',
          style({
            height: '*',
            width: '*',
          })
        ),
        animate(100, style({ opacity: '*' })),
        animate(100),
      ]),
      transition('* => void', [
        animate(50, style({ opacity: 0, height: 0 })),
        animate(
          200,
          style({
            'overflow-y': 'hidden',
            width: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class ScrollableContentComponent implements OnInit {
  @Input()
  scrollableData: RichContentData[] = [];

  data: RichContentData[] = [];

  currentIndex = 0;

  constructor() {}
  // 8 elem
  // 7 last index
  // 5, 6, 7 - last elems

  ngOnInit(): void {
    this.data = this.scrollableData.slice(
      this.currentIndex,
      this.currentIndex + 3
    );
    console.log(this.data);
  }

  next() {
    if (this.currentIndex === this.scrollableData.length - 1) return;
    this.currentIndex++;
    if (this.currentIndex < this.scrollableData.length - 2) {
      this.data = this.scrollableData.slice(
        this.currentIndex - 1,
        this.currentIndex + 2
      );
    } else {
      this.data = this.scrollableData.slice(this.scrollableData.length - 3);
    }
  }

  prev() {
    if (this.currentIndex === 0) return;
    this.currentIndex--;
    if (this.currentIndex > 1) {
      this.data = this.scrollableData.slice(
        this.currentIndex - 1,
        this.currentIndex + 2
      );
    } else {
      this.data = this.scrollableData.slice(0, 3);
    }
  }

  getStyle(index: number) {
    if (this.currentIndex === 0) {
      return index === 0 ? '' : index === 1 ? 'dimmed-20' : 'dimmed-40';
    } else if (this.currentIndex === this.scrollableData.length - 1) {
      return index === 0 ? 'dimmed-40' : index === 1 ? 'dimmed-20' : '';
    } else {
      return index === 1 ? '' : 'dimmed-20';
    }
  }

  // next() {
  //   if (this.currentIndex === this.scrollableData.length - 1) return;
  //   this.currentIndex++;
  //   if (this.currentIndex === 0) {
  //     this.data = this.scrollableData.slice(0, 3);
  //   } else if (this.currentIndex === this.scrollableData.length - 1) {
  //     this.data = this.scrollableData.slice(-3);
  //   } else {
  //     this.data = this.scrollableData.slice(
  //       this.currentIndex - 1,
  //       this.currentIndex + 2
  //     );
  //   }
  // }

  // getClass(index: number) {
  //   if (this.currentIndex === 0) {
  //     return index === this.currentIndex
  //       ? ''
  //       : index === 1
  //       ? 'dimmed-20'
  //       : index === 2
  //       ? 'dimmed-40'
  //       : 'hidden';
  //   } else if (this.currentIndex === this.scrollableData.length - 1) {
  //     return index === this.currentIndex
  //       ? ''
  //       : index === this.scrollableData.length - 2
  //       ? 'dimmed-20'
  //       : index === this.scrollableData.length - 3
  //       ? 'dimmed-40'
  //       : 'hidden';
  //   } else {
  //     return index === this.currentIndex
  //       ? ''
  //       : Math.abs(this.currentIndex - index) === 1
  //       ? 'dimmed-20'
  //       : 'hidden';
  //   }
  // }

  // prev() {
  //   if (this.currentIndex === 0) return;
  //   this.currentIndex--;
  //   if (this.currentIndex === 0) {
  //     this.data = this.scrollableData.slice(0, 3);
  //   } else if (this.currentIndex === this.scrollableData.length - 1) {
  //     this.data = this.scrollableData.slice(-3);
  //   } else {
  //     this.data = this.scrollableData.slice(
  //       this.currentIndex - 1,
  //       this.currentIndex + 2
  //     );
  //   }
  // }
}
