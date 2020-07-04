import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Perfil1Service } from '../../services/perfil1/perfil1.service';
import { Perfil1 } from '../../models/perfil1.models';
import swal from 'sweetalert';
//import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
//import { enableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-perfil1',
  templateUrl: './perfil1.component.html',
  styleUrls: ['./perfil1.component.css']
})
export class Perfil1Component implements OnInit {

  forma: FormGroup;
  constructor(
    public _perfil1Service: Perfil1Service,
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
      text: "Usted se registro exitosamente a la vinculacion \nLIGA CONTRA EL CANCER",
      icon: "success",
      //dangerMode: true,
    })
    .then(function () {
      window.location.href = "/dashboard";
    }); 



    // Llamado y creacion de Usuario
    // tslint:disable-next-line: prefer-const
    let perfil1 = new Perfil1(
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.password 
    );
    this._perfil1Service.crearUsuario(perfil1)
      .subscribe(resp => this.router.navigate(['/perfil1']));
  }

}
