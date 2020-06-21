import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfil9Component } from './perfil9.component';

describe('Perfil9Component', () => {
  let component: Perfil9Component;
  let fixture: ComponentFixture<Perfil9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Perfil9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Perfil9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
