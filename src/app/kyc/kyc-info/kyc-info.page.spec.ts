import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycInfoPage } from './kyc-info.page';

describe('KycInfoPage', () => {
  let component: KycInfoPage;
  let fixture: ComponentFixture<KycInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
