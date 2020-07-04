import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfil4 } from '../../models/perfil4.models';
import { URL_SERVICIOS } from '../../config/config';


@Injectable({
  providedIn: 'root'
})
export class Perfil4Service {
  constructor(
    public http: HttpClient
  ) {
    console.log('Servicio de Usuario Listo!!!');
  }
  crearUsuario(perfil4: Perfil4) {
    // tslint:disable-next-line: prefer-const
    let url = URL_SERVICIOS + '/perfil4';
    return this.http.post(url, perfil4);
  }
}