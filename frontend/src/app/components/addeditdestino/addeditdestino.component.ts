import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Destino } from 'src/app/models/destino';
import { DestinoService } from 'src/app/services/destino.service';

@Component({
  selector: 'app-addeditdestino',
  templateUrl: './addeditdestino.component.html',
  styleUrls: ['./addeditdestino.component.css'],
})
export class AddeditdestinoComponent implements OnInit {
  destinoForm: FormGroup;

  // id elegido por el usuario (para el put)
  id: string | null;

  destino: Destino = {
    nombre: '',
    descripcion: '',
    actividades: [],
    eventos: [],
    estacion: 0,
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _destinoservice: DestinoService,
    private actRouter: ActivatedRoute
  ) {
    this.destinoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      actividades: ['', Validators.required],
      eventos: ['', Validators.required],
      estacion: ['', Validators.required],
    });
    // se captura el id desde el navegador
    this.id = this.actRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {

    this.esEditar();
  }

  esEditar() {

    if (this.id !== null) {

      //console.log("el id no es nulo. el id seleccionado es: " + this.id);

      this._destinoservice.getDestino(this.id).subscribe({
        next: (data) => {
          this.destinoForm.setValue({
            nombre: data.nombre,
            descripcion: data.descripcion,
            actividades: [],
            eventos: [],
            estacion: data.estacion,
          });
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  agregarDestino() {
    const DESTINO: Destino = {
      nombre: this.destinoForm.value.nombre,
      descripcion: this.destinoForm.value.descripcion,
      actividades: [],
      eventos: [],
      estacion: this.destinoForm.value.estacion,
    };

    if (this.id !== null) {

      this._destinoservice.putDestinoSeleccionado(this.id, DESTINO).subscribe({
        next: (data) => {
          console.log('destino modificado');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log(err);
          this.destinoForm.reset();
        },
      });


    } else {
      console.log(Destino);

      this._destinoservice.postDestino(DESTINO).subscribe({
        next: (data) => {
          console.log('destino registrado');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log(err);
          this.destinoForm.reset();
        },
      });
    }
  }

}
