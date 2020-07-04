import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Perfil8 } from '../../models/perfil8.models';
import {URL_SERVICIOS} from '../../config/config';
@Injectable({
  providedIn: 'root'
})

export class Perfil8Service {
  constructor(
    public http: HttpClient
  ) {
    console.log ('Servicio de Perfil8 Listo!!!');
    }
   crearUsuario(perfil8: Perfil8){
    let url = URL_SERVICIOS + '/perfil8';
    return this.http.post(url, perfil8);
}
}
