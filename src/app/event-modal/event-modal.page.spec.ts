import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventModalPage } from './event-modal.page';

describe('EventModalPage', () => {
  let component: EventModalPage;
  let fixture: ComponentFixture<EventModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
