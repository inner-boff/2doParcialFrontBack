import { Component, OnInit } from '@angular/core';
import { Destino } from '../../../models/destino';
import { DestinoService } from '../../services/destino.service';

@Component({
  selector: 'app-listdestino',
  templateUrl: './listdestino.component.html',
  styleUrls: ['./listdestino.component.css']
})
export class ListdestinoComponent implements OnInit {
  listDestinos: Destino[] = [];

  constructor(private _destinoService: DestinoService) { }

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
}
