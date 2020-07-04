import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfil3 } from '../../models/perfil3.models';
import { URL_SERVICIOS } from '../../config/config';


@Injectable({
  providedIn: 'root'
})
export class Perfil3Service {
  constructor(
    public http: HttpClient
  ) {
    console.log('Servicio de Usuario Listo!!!');
  }
  crearUsuario(perfil3: Perfil3) {
    // tslint:disable-next-line: prefer-const
    let url = URL_SERVICIOS + '/perfil3';
    return this.http.post(url, perfil3);
  }
}
