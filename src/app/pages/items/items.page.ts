import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RespuestaDB } from 'src/app/interfaces/interfaces';
import { ItemsService } from 'src/app/services/items.service';
import { Items } from '../../interfaces/interfaces';
import { DetalleitemComponent } from 'src/app/componentes/detalleitem/detalleitem.component';

@Component({
  standalone: false,
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  itemsRecientes: Items[]=[];
  constructor(private servicioItems: ItemsService,

    private modalCtrl:ModalController) {
    
   }

   async verDetalleItem(item:Items){
         const modal=await this.modalCtrl.create({
           component:DetalleitemComponent,
           componentProps:{item}
         });
         modal.present();
       }
     

    ngOnInit() {
      this.servicioItems.getDatos1()
        .subscribe((resp: RespuestaDB)=>{
        console.log('Items', resp)
          this.itemsRecientes=resp.Items.results; 
        })
    }
  
  }