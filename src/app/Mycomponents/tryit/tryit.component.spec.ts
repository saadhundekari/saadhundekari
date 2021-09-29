/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TryitComponent } from './tryit.component';

describe('TryitComponent', () => {
  let component: TryitComponent;
  let fixture: ComponentFixture<TryitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
