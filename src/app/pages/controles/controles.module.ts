import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlesPageRoutingModule } from './controles-routing.module';

import { ControlesPage } from './controles.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlesPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ControlesPage]
})
export class ControlesPageModule {}
