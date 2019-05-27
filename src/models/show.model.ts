export interface Show {
    id: any;
    nombre: string;
    director: string;
    genero: string;
    backsplash:string;
    captura:string;
    backcolor:string;
    numTemporadas: number;
    seasons: [{
      sid: any;
      nombre: string;
      puntuacion: any;
      trailerlink: string;
      estreno: string;
      sinopsis: string;
      poster:string;
    }];
}
