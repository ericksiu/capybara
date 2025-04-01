import { Injectable } from '@angular/core';
import { RespuestaDB, RespuestaDetalle } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }
    getDatos1() {
      return this.http.get<RespuestaDB>('https://integradora10a-7ea24-default-rtdb.firebaseio.com/.json');
    }
    
    
    getItems(id: string) {
      return this.http.get<RespuestaDetalle>(`https://integradora10a-7ea24-default-rtdb.firebaseio.com/.json/${id}`);
  
  
    }
}
