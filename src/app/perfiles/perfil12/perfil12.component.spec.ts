import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfil12Component } from './perfil12.component';

describe('Perfil12Component', () => {
  let component: Perfil12Component;
  let fixture: ComponentFixture<Perfil12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Perfil12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Perfil12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
