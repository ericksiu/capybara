import { Component, OnInit } from '@angular/core';
import { Controles, RespuestaExtras } from '../../interfaces/interfaces';
import { ControlesService } from '../../services/controles.service';

@Component({
  standalone: false,
  selector: 'app-controles',
  templateUrl: './controles.page.html',
  styleUrls: ['./controles.page.scss'],
})
export class ControlesPage implements OnInit {
control: Controles[]=[];
  constructor(private servicioControles: ControlesService) { }

  ngOnInit() {
    this.servicioControles.getDatos1()
    .subscribe((resp: RespuestaExtras)=>{
      console.log('Controles', resp)
        this.control=resp.Teclado.results;
    })
  }

}
