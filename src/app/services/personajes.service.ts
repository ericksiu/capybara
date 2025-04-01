import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaDB, RespuestaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  getDatos() {
    return this.http.get<RespuestaDB>('https://integradora10a-7ea24-default-rtdb.firebaseio.com/.json');
  }
  
  
  getDetalle(id: string) {
    return this.http.get<RespuestaDetalle>(`https://integradora10a-7ea24-default-rtdb.firebaseio.com/.json/${id}`);


  }
  
}
