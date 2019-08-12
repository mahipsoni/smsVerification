import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycPage } from './kyc.page';

describe('KycPage', () => {
  let component: KycPage;
  let fixture: ComponentFixture<KycPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
