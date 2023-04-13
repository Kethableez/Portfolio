import { Component, Input, OnInit } from '@angular/core';
import { RichContentData } from '../rich-content/rich-content.component';

@Component({
  selector: 'ktbz-scrollable-content',
  templateUrl: './scrollable-content.component.html',
  styleUrls: ['./scrollable-content.component.scss'],
})
export class ScrollableContentComponent implements OnInit {
  @Input()
  scrollableData: RichContentData[] = [];

  data: RichContentData[] = [];

  currentIndex = 0;

  constructor() {}

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
    if (this.currentIndex === 0) {
      this.data = this.scrollableData.slice(0, 3);
    } else if (this.currentIndex === this.scrollableData.length - 1) {
      this.data = this.scrollableData.slice(-3);
    } else {
      this.data = this.scrollableData.slice(
        this.currentIndex - 1,
        this.currentIndex + 2
      );
    }
  }

  getClass(index: number) {
    if (this.currentIndex === 0) {
      return index === this.currentIndex
        ? ''
        : index === 1
        ? 'dimmed-20'
        : index === 2
        ? 'dimmed-40'
        : 'hidden';
    } else if (this.currentIndex === this.scrollableData.length - 1) {
      return index === this.currentIndex
        ? ''
        : index === this.scrollableData.length - 2
        ? 'dimmed-20'
        : index === this.scrollableData.length - 3
        ? 'dimmed-40'
        : 'hidden';
    } else {
      return index === this.currentIndex
        ? ''
        : Math.abs(this.currentIndex - index) === 1
        ? 'dimmed-20'
        : 'hidden';
    }
  }

  prev() {
    if (this.currentIndex === 0) return;
    this.currentIndex--;
    if (this.currentIndex === 0) {
      this.data = this.scrollableData.slice(0, 3);
    } else if (this.currentIndex === this.scrollableData.length - 1) {
      this.data = this.scrollableData.slice(-3);
    } else {
      this.data = this.scrollableData.slice(
        this.currentIndex - 1,
        this.currentIndex + 2
      );
    }
  }
}
