import { Component, Input, OnInit } from '@angular/core';
import { Items, Personaje, RespuestaDetalle } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Detalle } from '../../interfaces/interfaces';

@Component({

  standalone:false,
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id:any;
  @Input() personaje!: Detalle;
  detallePersonaje= {} as Detalle;
  
  constructor(private detalle: PersonajesService,private modalCtrl: ModalController) {}

  // Método para cerrar el modal
  regresar() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    this.detalle.getDetalle(this.id)
    .subscribe((respuesta: RespuestaDetalle)=>{
      console.log('Detalle Componente', respuesta)
      this.personaje= respuesta.resultado;
  });
}
}