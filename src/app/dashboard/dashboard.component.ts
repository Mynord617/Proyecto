import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

/*
class Nodo {
  value;
  siguiente: null;


  constructor(value) {
    this.value = value;
    this.siguiente = this.siguiente;

  }

};
class Cola {
  head;
  tail;
  length = 0;

  constructor(head, tail, length) {
    this.head = head;
    this.tail = tail;
    this.length = length;
  }
  ponerenCola(value) {
    const node = new Nodo(value); // Crea el nodo usando la clase Nodo 

    if (this.head) { // Si sale el primer nodo
      this.tail.next = node; // Inserta el nodo creado después de la cola  
      this.tail = node; // Ahora el nodo creado es el último nodo 
    } else { // Si no hay nodos en la cola 
      this.head = node; // El nodo creado lo llamaré 'head'  
      this.tail = node // También el nodo creado es una cola en la cola porque es único 
    }

    this.length++; // Aumenta la longitud de la cola en 1 
  }

  eliminarCola() {
    const current = this.head; // Guarda el enlace en el 'head' que debemos eliminar
    this.head = this.head.next; // Mueve el enlace 'head' al segundo nodo en la cola 
    this.length--; // Decrementamos la longitud de la cola 

    return current.value; // Devuelve el valor del nodo eliminado 
  }

  //this.head = this.head.next; // Mueve el enlace 'head' al segundo nodo en la cola

  mostrar() {
    let actual = this.head; // Guarda un enlace en el 'head' de la cola 

    while (actual) { // Pasa por cada nodo de la cola 
      console.log(actual.value); // Imprime el valor del nodo en la consola 
      actual = actual.next; // Mueve el enlace al siguiente nodo después del 'head' 
    }
  }

  siEstaVacio() {
    return this.length === 0;
  }


  obtenerPrimerNodo() {
    return this.head.value;
  }

  obtenerCantidadNodos() {
    return this.length;
  }
}
*/

export class DashboardComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {
  }

}

