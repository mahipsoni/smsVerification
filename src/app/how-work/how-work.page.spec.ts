import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWorkPage } from './how-work.page';

describe('HowWorkPage', () => {
  let component: HowWorkPage;
  let fixture: ComponentFixture<HowWorkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowWorkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
