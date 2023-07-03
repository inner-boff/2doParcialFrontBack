import { Component, OnInit } from '@angular/core';
import  {FormBuilder, FormGroup, Validators}  from '@angular/forms';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/models/actividad';
import { Destino } from 'src/app/models/destino';
import { DestinoService } from 'src/app/services/destino.service';

@Component({
  selector: 'app-addeditact',
  templateUrl: './addeditact.component.html',
  styleUrls: ['./addeditact.component.css']
})
export class AddeditactComponent implements OnInit {
  actividadForm: FormGroup;
  
  esEditar = false;
  esAgregar = false;

  destino: Destino = { nombre: '',
                       descripcion: '',
                       actividades: [],
                       eventos:[],
                       estacion: 0};

  actividad: Actividad = { nombre: 'Nombre',
  descripcion: 'Descripcion',
  categoria: 'Deporte - Cultural - Nocturno'};                       

  constructor(private fb:FormBuilder, private router:Router, private _destinoService: DestinoService){
    this.actividadForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required]
    })
  }  

  ngOnInit(): void {
    this.destino = this._destinoService.destinoSel;
    this.esEditar = this._destinoService.esEditarAct;
    this.esAgregar = this._destinoService.esAgregarACt;

    if (this.esEditar){
      console.log("entrando es editar");
      //this.actividad.nombre = this.destino.actividades[this._destinoService.actElegida].nombre;
      //this.actividad.descripcion = this.destino.actividades[this._destinoService.actElegida].descripcion;
      //this.actividad.categoria = this.destino.actividades[this._destinoService.actElegida].categoria;
      this.actividadForm.setValue({
        nombre: this.destino.actividades[this._destinoService.actElegida].nombre,
        descripcion: this.destino.actividades[this._destinoService.actElegida].descripcion,
        categoria: this.destino.actividades[this._destinoService.actElegida].categoria
      });
    }    
  }

  editarActividad() {
    const ACTIVIDAD: Actividad = {
      nombre: this.actividadForm.value.nombre,
      descripcion: this.actividadForm.value.descripcion,
      categoria: this.actividadForm.value.categoria
    }
    console.log(ACTIVIDAD);

    this.destino.actividades[this._destinoService.actElegida] = ACTIVIDAD;

    this._destinoService.putDestino(this.destino).subscribe({
      next: data => {
        console.log("Actividad modificada");
        this.router.navigate(['/listAct'])
    }, error: err => {
      console.log(err);
      this.actividadForm.reset();
    }
    })
  } 

  agregarActividad() {
    const ACTIVIDAD: Actividad = {
      nombre: this.actividadForm.value.nombre,
      descripcion: this.actividadForm.value.descripcion,
      categoria: this.actividadForm.value.categoria
    }
    console.log(ACTIVIDAD);

    this.destino.actividades.push(ACTIVIDAD);
    this._destinoService.putDestino(this.destino).subscribe({
      next: data => {
        console.log("Actividad agregada");
        this.router.navigate(['/listAct'])
    }, error: err => {
      console.log(err);
      this.actividadForm.reset();
    }
    })
  }  
}
