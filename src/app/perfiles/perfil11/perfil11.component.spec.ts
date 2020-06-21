import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfil11Component } from './perfil11.component';

describe('Perfil11Component', () => {
  let component: Perfil11Component;
  let fixture: ComponentFixture<Perfil11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Perfil11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Perfil11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
