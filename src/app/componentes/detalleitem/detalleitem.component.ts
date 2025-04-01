import { Component, Input, OnInit } from '@angular/core';
import { Detalle, RespuestaDetalle } from '../../interfaces/interfaces';
import { ItemsService } from 'src/app/services/items.service';
import { ModalController } from '@ionic/angular';

@Component({
  standalone:false,
  selector: 'app-detalleitem',
  templateUrl: './detalleitem.component.html',
  styleUrls: ['./detalleitem.component.scss'],
})
export class DetalleitemComponent  implements OnInit {
  @Input() id:any;
  @Input() item!: Detalle;
  detalleItem= {} as Detalle;
  
  constructor(
    private detalle: ItemsService,
    private modalCtrl: ModalController
  ) { }
  regresar() {
    this.modalCtrl.dismiss();
  }


 
    ngOnInit() {
        this.detalle.getItems(this.id)
        .subscribe((respuesta: RespuestaDetalle)=>{
          console.log('Detalle Componente', respuesta)
          this.item= respuesta.resultado;
    });
}
}
