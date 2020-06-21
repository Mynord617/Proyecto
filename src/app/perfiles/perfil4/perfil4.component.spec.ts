import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfil4Component } from './perfil4.component';

describe('Perfil4Component', () => {
  let component: Perfil4Component;
  let fixture: ComponentFixture<Perfil4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Perfil4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Perfil4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
