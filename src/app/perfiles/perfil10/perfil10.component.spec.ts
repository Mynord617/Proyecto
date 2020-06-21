import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfil10Component } from './perfil10.component';

describe('Perfil10Component', () => {
  let component: Perfil10Component;
  let fixture: ComponentFixture<Perfil10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Perfil10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Perfil10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
