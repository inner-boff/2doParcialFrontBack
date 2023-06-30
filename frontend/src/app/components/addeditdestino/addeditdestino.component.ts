import { Component, OnInit } from '@angular/core';
import  {FormBuilder, FormGroup, Validators }  from '@angular/forms';
import { Router } from '@angular/router';
import { Destino } from 'src/app/models/destino';
import { DestinoService } from 'src/app/services/destino.service';

@Component({
  selector: 'app-addeditdestino',
  templateUrl: './addeditdestino.component.html',
  styleUrls: ['./addeditdestino.component.css']
})
export class AddeditdestinoComponent {

  destinoForm: FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private _destinoservice: DestinoService){
    this.destinoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      actividades: ['', Validators.required],
      eventos: ['', Validators.required],
      estacion: ['', Validators.required]
    })
  }

  agregarDestino() {
    const DESTINO: Destino = {
      nombre: this.destinoForm.value.nombre,
      descripcion: this.destinoForm.value.descripcion,
      actividades: this.destinoForm.value.actividades,
      eventos: this.destinoForm.value.eventos,
      estacion: this.destinoForm.value.estacion
    }
    console.log(Destino);

    this._destinoservice.postDestino(DESTINO).subscribe({
      next: data => {
        console.log("destino registrado");
        this.router.navigate(['/'])
    }, error: err => {
      console.log(err);
      this.destinoForm.reset();
    }
    })

  }

}
