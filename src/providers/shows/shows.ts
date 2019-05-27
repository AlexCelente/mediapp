import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Show }       from '../../models/show.model';

@Injectable()
export class ShowsProvider {

  private shows: Show []=
  [{
    id: 0,
    nombre: 'Juego de Tronos',
    director: "Joe Russo y Anthony Russo",
    genero: "Acción y aventura",
    backsplash: "https://images5.alphacoders.com/637/thumb-1920-637668.jpg",
    captura: "https://image.tmdb.org/t/p/original/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg",
    backcolor: "#0F0E0F",
    numTemporadas: 8,
    seasons: [{
      sid: 1,
      nombre: "Temporada 1",
      puntuacion: "8.7",
      trailerlink: "https://www.youtube.com/embed/UQ3bqYKnyhM",
      estreno: "26 de abril de 2010",
      sinopsis: "Esto es la temporada 1",
      poster: "https://production-gameflipusercontent.fingershock.com/us-east-1:d1d29838-417f-42ee-9268-2b7776c9b340/8851aa5a-3a9d-442d-ad01-047b2b206034/ed8bcccf-dbf8-4edd-8b2a-18671ba08c6a"
    },
    {
      sid: 2,
      nombre: "Temporada 2",
      puntuacion: "5.3",
      trailerlink: "https://www.youtube.com/embed/UQ3bqYKnyhM",
      estreno: "26 de abril de 2011",
      sinopsis: "Esto es la temporada 2",
      poster: "http://www.coverwhiz.com/content/Game-Of-Thrones-Season-2.jpg"
    },
    {
      sid: 3,
      nombre: "Temporada 3",
      puntuacion: "6.1",
      trailerlink: "https://www.youtube.com/embed/UQ3bqYKnyhM",
      estreno: "26 de abril de 2010",
      sinopsis: "Esto es la temporada 3",
      poster: "https://production-gameflipusercontent.fingershock.com/us-east-1:d1d29838-417f-42ee-9268-2b7776c9b340/8851aa5a-3a9d-442d-ad01-047b2b206034/ed8bcccf-dbf8-4edd-8b2a-18671ba08c6a"
    },
    {
      sid: 4,
      nombre: "Temporada 4",
      puntuacion: "9.2",
      trailerlink: "https://www.youtube.com/embed/UQ3bqYKnyhM",
      estreno: "26 de abril de 2010",
      sinopsis: "Esto es la temporada 4",
      poster: "https://production-gameflipusercontent.fingershock.com/us-east-1:d1d29838-417f-42ee-9268-2b7776c9b340/8851aa5a-3a9d-442d-ad01-047b2b206034/ed8bcccf-dbf8-4edd-8b2a-18671ba08c6a"
    },
    {
      sid: 5,
      nombre: "Temporada 5",
      puntuacion: "8.7",
      trailerlink: "https://www.youtube.com/embed/UQ3bqYKnyhM",
      estreno: "26 de abril de 2010",
      sinopsis: "Esto es la temporada 5",
      poster: "https://production-gameflipusercontent.fingershock.com/us-east-1:d1d29838-417f-42ee-9268-2b7776c9b340/8851aa5a-3a9d-442d-ad01-047b2b206034/ed8bcccf-dbf8-4edd-8b2a-18671ba08c6a"
    },
    {
      sid: 6,
      nombre: "Temporada 6",
      puntuacion: "8.7",
      trailerlink: "https://www.youtube.com/embed/UQ3bqYKnyhM",
      estreno: "26 de abril de 2010",
      sinopsis: "Esto es la temporada 6",
      poster: "https://production-gameflipusercontent.fingershock.com/us-east-1:d1d29838-417f-42ee-9268-2b7776c9b340/8851aa5a-3a9d-442d-ad01-047b2b206034/ed8bcccf-dbf8-4edd-8b2a-18671ba08c6a"
    },
    {
      sid: 7,
      nombre: "Temporada 7",
      puntuacion: "8.7",
      trailerlink: "https://www.youtube.com/embed/UQ3bqYKnyhM",
      estreno: "26 de abril de 2010",
      sinopsis: "Esto es la temporada 7",
      poster: "https://production-gameflipusercontent.fingershock.com/us-east-1:d1d29838-417f-42ee-9268-2b7776c9b340/8851aa5a-3a9d-442d-ad01-047b2b206034/ed8bcccf-dbf8-4edd-8b2a-18671ba08c6a"
    }]
  }
  ];

  private current: number = 0;

  constructor(public http: HttpClient) {}

  getShows(){
    return this.shows;
  }

  getId(){
    return this.current;
  }

  setId(id: number){
    this.current = id;
  }

}
