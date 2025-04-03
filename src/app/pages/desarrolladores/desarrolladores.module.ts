import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesarrolladoresPageRoutingModule } from './desarrolladores-routing.module';

import { DesarrolladoresPage } from './desarrolladores.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesarrolladoresPageRoutingModule,
    ComponentesModule
  ],
  declarations: [DesarrolladoresPage]
})
export class DesarrolladoresPageModule {}
