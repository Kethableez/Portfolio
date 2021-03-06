import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ktbz-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() image: string = '';

  constructor() {}

  ngOnInit(): void {}

  get imageUrl(): string {
    return `assets/images/${this.image}.png`;
  }
}
