import { Component, OnInit } from '@angular/core';
import { Galeria, RespuestaExtras } from '../../interfaces/interfaces';
import { GaleriaService } from '../../services/galeria.service';

@Component({
  standalone: false,
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {
  galeria: Galeria[] = [];
  constructor(private servicioGaleria: GaleriaService) { }

  ngOnInit() {
    this.servicioGaleria.getDatos1()
        .subscribe((resp: RespuestaExtras)=>{
          console.log('Controles', resp)
            this.galeria=resp.Galeria.results;
        })
  }

}
