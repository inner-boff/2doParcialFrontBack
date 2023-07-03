import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Destino } from 'src/app/models/destino';
import { DestinoService } from 'src/app/services/destino.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addeditdestino',
  templateUrl: './addeditdestino.component.html',
  styleUrls: ['./addeditdestino.component.css'],
})
export class AddeditdestinoComponent implements OnInit {
  destinoForm: FormGroup;

  // id para modificar un destino específico seleccionado
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _destinoservice: DestinoService,
    private actRouter: ActivatedRoute,
    private toast: ToastrService
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

    if (this.id !== null) {

      const DESTINO: Destino = {
        nombre: this.destinoForm.value.nombre,
        descripcion: this.destinoForm.value.descripcion,
        actividades: this._destinoservice.destinoSel.actividades,
        eventos: this._destinoservice.destinoSel.eventos,
        estacion: this.destinoForm.value.estacion,
      };

      this._destinoservice.putDestinoSeleccionado(this.id, DESTINO).subscribe({
        next: (data) => {
          console.log('destino modificado');
          this.toast.success('Destino modificado', ' ' , { timeOut: 2000 });
          this.router.navigate(['/lista-destino']);
        },
        error: (err) => {
          console.log(err);
          this.destinoForm.reset();
        },
      });
    } else {

      const DESTINO: Destino = {
        nombre: this.destinoForm.value.nombre,
        descripcion: this.destinoForm.value.descripcion,
        actividades: [],
        eventos: [],
        estacion: this.destinoForm.value.estacion,
      };

      console.log(Destino);

      this._destinoservice.postDestino(DESTINO).subscribe({
        next: (data) => {
          console.log('destino registrado');
          this.toast.success('Destino agregado', ' ' , { timeOut: 2000 });
          this.router.navigate(['/lista-destino']);
        },
        error: (err) => {
          console.log(err);
          this.destinoForm.reset();
        },
      });
    }
  }
}
