import { Component, OnInit } from '@angular/core';
import { Destino } from '../../models/destino';
import { DestinoService } from '../../services/destino.service';

@Component({
  selector: 'app-listactividad',
  templateUrl: './listactividad.component.html',
  styleUrls: ['./listactividad.component.css']
})
export class ListactividadComponent implements OnInit {
  destino: Destino = { nombre: '',
                       descripcion: '',
                       actividades: [],
                       eventos:[],
                       estacion: 0};

  constructor(private _destinoService: DestinoService) { }

  ngOnInit(): void {
    console.log(this._destinoService.destinoElegido);
    this.obtenerDestino();
  }

  obtenerDestino() {
    this._destinoService.getDestino(this._destinoService.destinoElegido).subscribe({
      next: data => {
        console.log(data);
        this.destino = data;
      }, error: err => {
        console.log(err);
      }
    });
  }  

}
