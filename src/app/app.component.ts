import { Component } from '@angular/core';

interface Elemento{
  icono: string;
  nombre:string;
  ruta:string;
  }

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  elementos: Elemento[]=[
    { 
      icono: 'images-outline',
      nombre:'Galeria',
      ruta:'/galeria'
    },
    { 
      icono: 'game-controller-outline',
      nombre:'Controles',
      ruta:'/controles'
      },
    { 
      icono: 'body-outline',
      nombre:'Personajes',
      ruta:'/personajes'
      },
    { 
      icono: 'cube-outline',
      nombre:'Items',
      ruta:'/items'
      },
    { 
      icono: 'people-outline',
      nombre:'Desarrolladores',
      ruta:'/desarrolladores'
      },
    ];
  constructor() {}
}
