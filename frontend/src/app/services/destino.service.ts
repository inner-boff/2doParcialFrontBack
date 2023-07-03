import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Destino } from '../models/destino';

@Injectable({
  providedIn: 'root',
})
export class DestinoService {
  url = 'http://localhost:3000/api/destinos/';

  public destinoElegido: string = '';
  public actElegida: number = 0;

  public esEditarAct = false;
  public esAgregarACt = false;

  public destinoSel: Destino = {
    nombre: '',
    descripcion: '',
    actividades: [],
    eventos: [],
    estacion: 0,
  };

  constructor(private http: HttpClient) {}

  getDestinos(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteDestino(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  getDestino(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  postDestino(prod: Destino): Observable<any> {
    return this.http.post(this.url, prod);
  }

  // para actualizar los las actividades y eventos en los detinos
  putDestino(prod: Destino): Observable<any> {
    return this.http.put(this.url + prod._id, prod);
  }

  //para modifcar solo el destino seleccionado
  putDestinoSeleccionado(id: string, dest: Destino): Observable<any> {
    return this.http.put(this.url + id, dest);
  }
}
