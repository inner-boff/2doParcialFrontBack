import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  constructor(){}
    ngOnInit():void{}
    imgCollection: Array<object> = [
  
      {
        image: '../../../assets/destinos/inverno.jpg',
        thumbImage: '../../../assets/destinos/inverno.jpg',
        alt: 'Bariloche',
        title: 'Bariloche'
      }, {
        image: '../../../assets/destinos/otoño.jpg',
        thumbImage: '../../../assets/destinos/otoño.jpg',
        title: 'Sierras Salteñas',
        alt: 'Sierras Salteña'
      }, {
        image: '../../../assets/destinos/primavera.jpg',
        thumbImage: '../../../assets/destinos/primavera.jpg',
        title: 'Cataratas del Iguazu',
        alt: 'Cataratas del Iguaz'
      }, {
        image: '../../../assets/destinos/verano.jpg',
        thumbImage: '../../../assets/destinos/verano.jpg',
        title: 'Mar del Plata',
        alt: 'Mar del Plata'
      }, {
        image: '../../../assets/destinos/carrera.jpg',
        thumbImage: '../../../assets/destinos/carrera.jpg',
        title: 'Carreras en el mar',
        alt: 'Carreras en el mar'
      }, {
        image: '../../../assets/destinos/buceo.jpg',
        thumbImage: '../../../assets/destinos/buceo.jpg',
        title: 'Buceo con lobos marinos',
        alt: 'Buceo con lobos marinos'
      }, {
        image: '../../../assets/destinos/festival.jpg',
        thumbImage: '../../../assets/destinos/festival.jpg',
        title: 'Festival Tradicional',
        alt: 'Festival Tradicional'
      }, {
        image: '../../../assets/destinos/pinguinos.jpg',
        thumbImage: '../../../assets/destinos/pinguinos.jpg',
        title: 'Avistaje de pinguinos',
        alt: 'Avistaje de pinguinos'
      }
  ];
}
