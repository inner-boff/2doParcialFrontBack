import { Component, OnInit } from '@angular/core';
import { Destino } from '../../models/destino';
import { DestinoService } from '../../services/destino.service';
import { Router } from '@angular/router';
import { Evento } from 'src/app/models/evento';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listevento',
  templateUrl: './listevento.component.html',
  styleUrls: ['./listevento.component.css']
})
export class ListeventoComponent implements OnInit{
  destino: Destino = { nombre: '',
                       descripcion: '',
                       actividades: [],
                       eventos:[],
                       estacion: 0};

  constructor(private _destinoService: DestinoService,
              private router: Router,
              private toast: ToastrService  
  ) { }

  ngOnInit(): void {
    this.destino = this._destinoService.destinoSel;
  }

  editarEvento(even: Evento) {
    this._destinoService.esEditarAct = true;
    this._destinoService.esAgregarACt = false;
    this._destinoService.actElegida = this.destino.eventos.indexOf(even);
    this.router.navigate(['/addEve']);
  }

  eliminarEvento(even: Evento) {
    const nuevosEventos = this.destino.eventos.filter((item) => item !== even);

    this.destino.eventos = nuevosEventos;

    this._destinoService.putDestino(this.destino).subscribe({
      next: data => {
        console.log("Evento eliminado");
        this.toast.success('Evento eliminado', ' ' , { timeOut: 2000 });
        this.router.navigate(['/listEve'])
    }, error: err => {
      console.log(err);
    }
    })    
  }  

  agregarEvento() {
    this._destinoService.esAgregarACt = true;
    this._destinoService.esEditarAct = false;
    this.router.navigate(['/addEve']);
  }   

}
