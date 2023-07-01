import { Component, OnInit } from '@angular/core';
import { Destino } from '../../models/destino';
import { DestinoService } from '../../services/destino.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listdestino',
  templateUrl: './listdestino.component.html',
  styleUrls: ['./listdestino.component.css']
})
export class ListdestinoComponent implements OnInit {
  listDestinos: Destino[] = [];

  constructor(private _destinoService: DestinoService,
              private router: Router
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
}
