import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Destino } from '../../models/destino';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {
  url= "http://localhost:3000/api/destinos/";

  constructor(private http: HttpClient) { }

  getDestinos():Observable<any> {
    return this.http.get(this.url);
  }

  deleteDestino(id: string):Observable<any> {
    return this.http.delete(this.url + id);
  }

  postDestino(prod: Destino):Observable<any> {
    return this.http.post(this.url,prod);
  }
}
