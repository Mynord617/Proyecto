import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfil6Component } from './perfil6.component';

describe('Perfil6Component', () => {
  let component: Perfil6Component;
  let fixture: ComponentFixture<Perfil6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Perfil6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Perfil6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
