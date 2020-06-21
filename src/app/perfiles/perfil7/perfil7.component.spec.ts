import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfil7Component } from './perfil7.component';

describe('Perfil7Component', () => {
  let component: Perfil7Component;
  let fixture: ComponentFixture<Perfil7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Perfil7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Perfil7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
