import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaExtras } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ControlesService {

  constructor(private http: HttpClient) { }
  getDatos1() {
        return this.http.get<RespuestaExtras>('https://integradora10a-7ea24-default-rtdb.firebaseio.com/.json');
      }
    
}
