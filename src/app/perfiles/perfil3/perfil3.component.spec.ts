import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfil3Component } from './perfil3.component';

describe('Perfil3Component', () => {
  let component: Perfil3Component;
  let fixture: ComponentFixture<Perfil3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Perfil3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Perfil3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
