import { Component, OnInit } from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  verYoutube(){
    window.open('https://youtu.be/kEF-QMiLHxU?si=_rw3VlvjkNaLJzyw');
  }
  mostrarMas = false; 
  textoCorto = 'El sol brillaba sobre la selva cuando la familia de nuestro valiente capibara decidió ir al río a refrescarse. Pero él, el más pequeño de todos, se quedó dormido bajo la sombra de un árbol. Al despertar...'; 
  textoLargo = 'desesperado, buscó a su familia por todas partes hasta que, en la distancia, vio una camioneta alejándose a toda velocidad. Sin dudarlo, su instinto lo llevó a lanzarse en una persecución frenética. Los cazadores furtivos se habían llevado a su familia, y él no se detendría hasta rescatarlos. Su viaje lo llevará a través de densos bosques, peligrosas carreteras y bulliciosas ciudades, esquivando obstáculos y enfrentando desafíos hasta llegar al oscuro almacén donde los traficantes de animales escondían a sus presas. La aventura apenas comienza… ¿Podrá nuestro pequeño capibara superar cada obstáculo y salvar a su familia antes de que sea demasiado tarde?';
  mostrarMasTexto() {
    this.mostrarMas = true; // Cuando se hace clic en "Leer más", se muestra todo el texto
  }

  mostrarMenosTexto() {
    this.mostrarMas = false; // Cuando se hace clic en "Leer menos", se oculta el texto largo
  }
  constructor() { }

  ngOnInit() {
  }

}
