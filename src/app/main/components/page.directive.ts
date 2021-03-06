import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageType } from 'src/app/core/models/page-type.model';
import { isPageVisible } from 'src/app/core/store/app';
import { RootState } from 'src/app/core/store/root.state';

const BLOB1 = {
  blob: 'blob-1',
  style: 'blob up right',
  size: {
    width: 648,
    height: 648,
  },
};

const BLOB2 = {
  blob: 'blob-2',
  style: 'blob down left',
  size: {
    width: 649,
    height: 648,
  },
};

const BLOB3 = {
  blob: 'blob-3',
  style: 'blob up left',
  size: {
    width: 648,
    height: 687,
  },
};

const BLOB4 = {
  blob: 'blob-4',
  style: 'blob down right',
  size: {
    width: 648,
    height: 648,
  },
};

const BLOB5 = {
  blob: 'blob-5',
  style: 'blob up right',
  size: {
    width: 648,
    height: 648,
  },
};

const BLOB6 = {
  blob: 'blob-6',
  style: 'blob down left',
  size: {
    width: 648,
    height: 721,
  },
};

const BLOBS: { [key: string]: any } = {
  blob1: BLOB1,
  blob2: BLOB2,
  blob3: BLOB3,
  blob4: BLOB4,
  blob5: BLOB5,
  blob6: BLOB6,
};

@Directive({
  selector: '[appPage]',
})
export abstract class PageDirective {

  @Input() isVisible = false;

  abstract pageType: PageType;
  abstract prefix: string;

  background: string = '';

  blobs: any[] = [];

  detailsOpen = false;

  constructor(
    protected ref: ElementRef,
    protected store$: Store<RootState>
    ) {

    }

  private setBackground(background: string) {
    this.background = background;
  }

  private setBlobs(blobNames: string[]) {
    this.blobs = blobNames.map((name) => BLOBS[name]);
    console.log(this.blobs);
  }

  initPage(pageType: PageType) {
    const background = this.prepareBackground(pageType);
    const blobNames = this.prepareBlobNames(pageType);

    this.setBackground(background);
    this.setBlobs(blobNames);
  }

  getLabel(key: string, isFull?: boolean): string {
    if(isFull) return key;
    return [this.prefix, key].join('.');
  }

  private prepareBackground(pageType: PageType) {
    switch (pageType) {
      case PageType.ABSTRACT:
      case PageType.LANDING:
      case PageType.EDUCATION:
      case PageType.PROJECTS:
        return 'bg-dark';

      case PageType.ABOUT:
      case PageType.EXPERIENCE:
      case PageType.CONTACT:
        return 'bg-light';
    }
  }

  private prepareBlobNames(pageType: PageType) {
    switch (pageType) {
      case PageType.ABSTRACT:
      case PageType.LANDING:
        return ['blob1', 'blob2'];
      case PageType.ABOUT:
      case PageType.EXPERIENCE:
      case PageType.CONTACT:
        return ['blob3', 'blob4'];
      case PageType.EDUCATION:
      case PageType.PROJECTS:
        return ['blob5', 'blob6'];
    }
  }
}
