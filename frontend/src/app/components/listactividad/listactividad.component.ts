import { Component, OnInit } from '@angular/core';
import { Destino } from '../../models/destino';
import { DestinoService } from '../../services/destino.service';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/models/actividad';

@Component({
  selector: 'app-listactividad',
  templateUrl: './listactividad.component.html',
  styleUrls: ['./listactividad.component.css']
})
export class ListactividadComponent implements OnInit {
  destino: Destino = {
    nombre: '',
    descripcion: '',
    actividades: [],
    eventos: [],
    estacion: 0
  };

  constructor(private _destinoService: DestinoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.destino = this._destinoService.destinoSel
    console.log(this.destino);
  }

  editarActividad(act: Actividad) {
    this._destinoService.esEditarAct = true;
    this._destinoService.esAgregarACt = false;
    this._destinoService.actElegida = this.destino.actividades.indexOf(act);
    console.log(this.destino.actividades.indexOf(act));
    this.router.navigate(['/addAct']);
  }

  eliminarActividad(act: Actividad) {
    const nuevasActividades = this.destino.actividades.filter((item) => item !== act);

    this.destino.actividades = nuevasActividades;

    this._destinoService.putDestino(this.destino).subscribe({
      next: data => {
        console.log("Actividad eliminada");
        this.router.navigate(['/listAct'])
    }, error: err => {
      console.log(err);
    }
    })    
  }  

  agregarActividad() {
    this._destinoService.esAgregarACt = true;
    this._destinoService.esEditarAct = false;
    this.router.navigate(['/addAct']);
  }  
}
