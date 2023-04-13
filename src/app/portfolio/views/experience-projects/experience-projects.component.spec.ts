import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceProjectsComponent } from './experience-projects.component';

describe('ExperienceProjectsComponent', () => {
  let component: ExperienceProjectsComponent;
  let fixture: ComponentFixture<ExperienceProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
