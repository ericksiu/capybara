import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Personaje, RespuestaDB } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from 'src/app/componentes/detalle/detalle.component';

@Component({
  standalone: false,
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})

  export class PersonajesPage implements OnInit {
    personajesRecientes: Personaje[]=[];
    
    constructor(private servicioPersonajes: PersonajesService,
  
      private modalCtrl:ModalController
    ) { }
  
    async verDetalle(personaje:Personaje){
      const modal=await this.modalCtrl.create({
        component:DetalleComponent,
        componentProps:{personaje}
      });
      modal.present();
    }
  
    ngOnInit() {
      this.servicioPersonajes.getDatos()
        .subscribe((resp: RespuestaDB)=>{
        console.log('Datos Personajes', resp)
          this.personajesRecientes=resp.Personajes.results; 
          
        })
    }
  
  }
  
