import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfil2 } from '../../models/perfil2.models';
import { URL_SERVICIOS } from '../../config/config';
@Injectable({
  providedIn: 'root'
})
export class Perfil2Service {
  constructor(
    public http: HttpClient
  ) {
    console.log('Servicio de Usuario Listo!!!');
  }
  crearUsuario(perfil2: Perfil2) {
    // tslint:disable-next-line: prefer-const
    let url = URL_SERVICIOS + '/perfil2';
    return this.http.post(url, perfil2);
  }
}
