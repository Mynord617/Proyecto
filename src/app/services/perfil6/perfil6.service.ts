import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Perfil6 } from '../../models/perfil6.models';
import {URL_SERVICIOS} from '../../config/config';
@Injectable({
  providedIn: 'root'
})

export class Perfil6Service {
  constructor(
    public http: HttpClient 
  ) {
    console.log ('Servicio de Perfil6 Listo!!!');
    }
   crearUsuario(perfil6: Perfil6){
    let url = URL_SERVICIOS + '/perfil6';
    return this.http.post(url, perfil6);
}
}
