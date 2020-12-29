import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMainHomeComponent } from './section-main-home.component';

describe('SectionMainHomeComponent', () => {
  let component: SectionMainHomeComponent;
  let fixture: ComponentFixture<SectionMainHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionMainHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMainHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
