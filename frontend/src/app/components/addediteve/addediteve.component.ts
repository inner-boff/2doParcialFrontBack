import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/models/actividad';
import { Destino } from 'src/app/models/destino';
import { Evento } from 'src/app/models/evento';
import { DestinoService } from 'src/app/services/destino.service';

@Component({
  selector: 'app-addediteve',
  templateUrl: './addediteve.component.html',
  styleUrls: ['./addediteve.component.css']
})
export class AddediteveComponent implements OnInit {
  eventoForm: FormGroup;

  esEditar = false;
  esAgregar = false;

  evento: Evento = {
    nombre: 'Nombre',
    descripcion: 'Descripcion',
    fecha: 'Fecha'
  };

  destino: Destino = {
    nombre: '',
    descripcion: '',
    actividades: [],
    eventos: [],
    estacion: 0
  };

  constructor(private fb: FormBuilder, private router: Router, private _destinoService: DestinoService) {
    this.eventoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.destino = this._destinoService.destinoSel;
    this.esEditar = this._destinoService.esEditarAct;
    this.esAgregar = this._destinoService.esAgregarACt;

    if (this.esEditar) {
      console.log("entrando es editar");

      this.eventoForm.setValue({
        nombre: this.destino.eventos[this._destinoService.actElegida].nombre,
        descripcion: this.destino.eventos[this._destinoService.actElegida].descripcion,
        fecha: this.destino.eventos[this._destinoService.actElegida].fecha
      });      
    }
  }

  editarEvento() {
    const EVENTO: Evento = {
      nombre: this.eventoForm.value.nombre,
      descripcion: this.eventoForm.value.descripcion,
      fecha: this.eventoForm.value.fecha
    }
    console.log(EVENTO);

    this.destino.eventos[this._destinoService.actElegida] = EVENTO;

    this._destinoService.putDestino(this.destino).subscribe({
      next: data => {
        console.log("Evento modificado");
        this.router.navigate(['/listEve'])
    }, error: err => {
      console.log(err);
      this.eventoForm.reset();
    }
    })
  } 

  agregarEvento() {
    const EVENTO: Evento = {
      nombre: this.eventoForm.value.nombre,
      descripcion: this.eventoForm.value.descripcion,
      fecha: this.eventoForm.value.fecha
    }
    console.log("Agregar evento");
    console.log(EVENTO);

    this.destino.eventos.push(EVENTO);
    this._destinoService.putDestino(this.destino).subscribe({
      next: data => {
        console.log("Evento agregada");
        this.router.navigate(['/listEve'])
    }, error: err => {
      console.log(err);
      this.eventoForm.reset();
    }
    })
  }   
}
