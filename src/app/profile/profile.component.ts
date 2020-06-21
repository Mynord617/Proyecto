import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.models';


//import { AngularFirestore } from '@angular/fire/firestore';
//import { Observable } from 'rxjs';

//declare function init_plugins();

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  forma: FormGroup;
  constructor(
    public _usuarioService: UsuarioService,
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
    // Llamado y creacion de Usuario
    // tslint:disable-next-line: prefer-const
    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.password
    );
    this._usuarioService.crearUsuario(usuario)
      .subscribe(resp => this.router.navigate(['/profile']));
  }
}
