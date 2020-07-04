import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario.models';
import { URL_SERVICIOS } from '../../config/config';


@Injectable({
  providedIn: 'root'
})
export class Perfil9Service {
  constructor(
  public http: HttpClient
  ) {
  console.log('Servicio de Usuario Listo!!!');
  }
  crearUsuario( usuario: Usuario){
  // tslint:disable-next-line: prefer-const
  let url = URL_SERVICIOS + '/usuario';
  return this.http.post( url, usuario );
  }
  }
  