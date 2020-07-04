import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfil5 } from '../../models/perfil5.models';
import { URL_SERVICIOS } from '../../config/config';


@Injectable({
  providedIn: 'root'
})
export class Perfil5Service {
  constructor(
    public http: HttpClient
  ) {
    console.log('Servicio de Usuario Listo!!!');
  }
  crearUsuario(perfil5: Perfil5) {
    // tslint:disable-next-line: prefer-const
    let url = URL_SERVICIOS + '/perfil5';
    return this.http.post(url, perfil5);
  }
}