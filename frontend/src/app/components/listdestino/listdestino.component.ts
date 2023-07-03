import { Component, OnInit } from '@angular/core';
import { Destino } from '../../models/destino';
import { DestinoService } from '../../services/destino.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listdestino',
  templateUrl: './listdestino.component.html',
  styleUrls: ['./listdestino.component.css']
})
export class ListdestinoComponent implements OnInit {
  listDestinos: Destino[] = [];

  constructor(private _destinoService: DestinoService,
              private router: Router,
              private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.obtenerDestinos();
  }

  obtenerDestinos() {
    this._destinoService.getDestinos().subscribe({
      next: data => {
        console.log(data);
        this.listDestinos = data;
      }, error: err => {
        console.log(err);
      }
    });
  }

  eliminarDestino(id: any) {
    this._destinoService.deleteDestino(id).subscribe({
      next: data => {
        this.obtenerDestinos();
        console.log("Se elimino destino");
        this.toast.success('Destino eliminado', ' ' , { timeOut: 2000 });
      }, error: err => {
        console.log(err);
      }
    })
  }

  irActividades(dest: Destino){
    if (dest._id){
      this._destinoService.destinoElegido = dest._id;
    }else{
      this._destinoService.destinoElegido = '';
    }
    
    this._destinoService.destinoSel = dest;
    console.log(this._destinoService.destinoElegido);
    this.router.navigate(['/listAct']);
  }

  irEventos(dest: Destino){
    if (dest._id){
      this._destinoService.destinoElegido = dest._id
    }else{
      this._destinoService.destinoElegido = '';
    }
    
    this._destinoService.destinoSel = dest
    console.log(this._destinoService.destinoElegido);
    this.router.navigate(['/listEve']);
  }  

  irEditDestino(dest: Destino){
    if (dest._id){
      this._destinoService.destinoElegido = dest._id
    }else{
      this._destinoService.destinoElegido = '';
    }
    
    this._destinoService.destinoSel = dest
    console.log(this._destinoService.destinoElegido);
    this.router.navigate(['/add',dest._id]);
  }    
}
