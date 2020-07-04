import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {URL_SERVICIOS} from '../../config/config';
import { Perfil7 } from '../../models/perfil7.models';
@Injectable({
  providedIn: 'root'
})

export class Perfil7Service {
  constructor(
    public http: HttpClient
  ) {
    console.log ('Servicio de Perfil7 Listo!!!');
    }
   crearUsuario(perfil7: Perfil7){
    let url = URL_SERVICIOS + '/perfil7';
    return this.http.post(url, perfil7);
}
}
