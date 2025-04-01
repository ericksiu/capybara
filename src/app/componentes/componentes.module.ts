import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { DetalleComponent } from './detalle/detalle.component';
import { DetalleitemComponent } from './detalleitem/detalleitem.component';



@NgModule({
  declarations: [HeaderComponent, DetalleComponent, DetalleitemComponent],
  exports: [HeaderComponent,DetalleComponent, DetalleitemComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }

