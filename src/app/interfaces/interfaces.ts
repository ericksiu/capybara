export interface Personaje {
  id: number;
  nombre: string;
  raza: string;
  descripcion: string;
  salud: number;
  dano: number;
  armas: string[];
  rol: string;
  imagen: string;
}

export interface Items {
  id: string;
  nombre: string;
  tipo: string;
  descripcion: string;
  efecto: string;
  imagen: string;
}

export interface RespuestaDB {
  Personajes: { results: Personaje[] };
  Items: { results: Items[] };
}

  
  export interface RespuestaDetalle {
    resultado: Detalle;
  }
  
  export interface Detalle {
    nombre: string;
    descripcion: string;
    imagen: string;
    tipo: string;
    efecto: string;
    raza: string;
    salud: number;
    dano: number;
    armas: string[];
    rol: string;
  }
  