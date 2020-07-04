import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfil1 } from '../../models/perfil1.models';
import { URL_SERVICIOS } from '../../config/config';
@Injectable({
  providedIn: 'root'
})
export class Perfil1Service {
  constructor(
    public http: HttpClient
  ) {
    console.log('Servicio de Usuario Listo!!!');
  }
  crearUsuario(perfil1: Perfil1) {
    // tslint:disable-next-line: prefer-const
    let url = URL_SERVICIOS + '/perfil1';
    return this.http.post(url, perfil1);
  }
}
