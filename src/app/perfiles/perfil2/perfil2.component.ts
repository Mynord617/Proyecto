import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Perfil2Service } from '../../services/service.index';
import { Perfil2 } from '../../models/perfil2.models';
import swal from 'sweetalert';

@Component({
  selector: 'app-perfil2',
  templateUrl: './perfil2.component.html',
  styleUrls: ['./perfil2.component.css']
})
export class Perfil2Component implements OnInit {

  forma: FormGroup;
  constructor(
    public _perfil2Service: Perfil2Service,
    public router: Router
  ) { }

  ngOnInit() {
    //init_plugins();
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      condiciones: new FormControl(false),
    });

    // Rellenar campos de forma automatica 
    this.forma.setValue({
      nombre: '',
      email: '',
      password: '',
      condiciones: true
    });

  }
  registrarUsuario() {
    swal({
      title: "FELICIDADES!",
      text: "Usted se registro exitosamente a la vinculacion \nCASA DEL ADULTO MAYOR",
      icon: "success",
      //dangerMode: true,
    })
    .then(function () {
      window.location.href = "/dashboard";
    });
    // Llamado y creacion de Usuario
    // tslint:disable-next-line: prefer-const
    let perfil2 = new Perfil2(
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.password
    );
    this._perfil2Service.crearUsuario(perfil2)
      .subscribe(resp => this.router.navigate(['/perfil2']));
  }
  
}
