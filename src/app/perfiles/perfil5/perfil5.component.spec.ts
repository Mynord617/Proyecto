import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfil5Component } from './perfil5.component';

describe('Perfil5Component', () => {
  let component: Perfil5Component;
  let fixture: ComponentFixture<Perfil5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Perfil5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Perfil5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
