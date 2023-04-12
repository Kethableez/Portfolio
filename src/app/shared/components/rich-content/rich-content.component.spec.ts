import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichContentComponent } from './rich-content.component';

describe('RichContentComponent', () => {
  let component: RichContentComponent;
  let fixture: ComponentFixture<RichContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RichContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RichContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
