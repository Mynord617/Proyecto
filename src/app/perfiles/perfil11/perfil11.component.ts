import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil11',
  templateUrl: './perfil11.component.html',
  styleUrls: ['./perfil11.component.css']
})
export class Perfil11Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  var1: number;
  var2: number;
  resultado: number;

  onSuma(): void {
    this.resultado = this.var1 + this.var2;
  }

  edicion1(): void {
    this.mostrar1 = true;
    this.mostrar2 = false;
    this.mostrar3 = false;
    this.mostrar4 = false;
    this.mostrar5 = false;
    this.mostrar6 = false;
    this.mostrar7 = false;

  }
  mostrar1: boolean;

  edicion2(): void {
    this.mostrar1 = false;
    this.mostrar2 = true;
    this.mostrar3 = false;
    this.mostrar4 = false;
    this.mostrar5 = false;
    this.mostrar6 = false;
    this.mostrar7 = false;
  }
  mostrar2: boolean;

  edicion3(): void {
    this.mostrar1 = false;
    this.mostrar2 = false;
    this.mostrar3 = true;
    this.mostrar4 = false;
    this.mostrar5 = false;
    this.mostrar6 = false;
    this.mostrar7 = false;

  }
  mostrar3: boolean;

  edicion4(): void {
    this.mostrar1 = false;
    this.mostrar2 = false;
    this.mostrar3 = false;
    this.mostrar4 = true;
    this.mostrar5 = false;
    this.mostrar6 = false;
    this.mostrar7 = false;
  }
  mostrar4: boolean;

  edicion5(): void {
    this.mostrar1 = false;
    this.mostrar2 = false;
    this.mostrar3 = false;
    this.mostrar4 = false;
    this.mostrar5 = true;
    this.mostrar6 = false;
    this.mostrar7 = false;
  }
  mostrar5: boolean;

  edicion6(): void {
    this.mostrar1 = false;
    this.mostrar2 = false;
    this.mostrar3 = false;
    this.mostrar4 = false;
    this.mostrar5 = false;
    this.mostrar6 = true;
    this.mostrar7 = false;
  }
  mostrar6: boolean;


  edicion7(): void {
    this.mostrar1 = false;
    this.mostrar2 = false;
    this.mostrar3 = false;
    this.mostrar4 = false;
    this.mostrar5 = false;
    this.mostrar6 = false;
    this.mostrar7 = true;
  }
  mostrar7: boolean;

}
