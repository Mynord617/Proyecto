import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfil8Component } from './perfil8.component';

describe('Perfil8Component', () => {
  let component: Perfil8Component;
  let fixture: ComponentFixture<Perfil8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Perfil8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Perfil8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
