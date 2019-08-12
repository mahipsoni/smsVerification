import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductsPage } from './our-products.page';

describe('OurProductsPage', () => {
  let component: OurProductsPage;
  let fixture: ComponentFixture<OurProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProductsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
