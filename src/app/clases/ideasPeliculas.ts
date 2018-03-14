export class ideasPeliculas {

  nombre: string;
  genero: string;
  resumen: string;
  votos: number;
  autor: string;


  constructor(nombre: string, genero: string, resumen: string, votos: number, autor: string) {
    this.nombre = nombre;
    this.genero = genero;
    this.resumen = resumen;
    this.votos = votos;
    this.autor = autor;
  }
}

  export const IDEAS = [
    {nombre: 'idea1', genero: 'Comedia’', resumen: 'muy graciosa', votos: '1', autor: 'autor1'},
    {nombre: 'idea2', genero: 'Comedia’', resumen: 'muy graciosa', votos: '2', autor: 'autor2'},
    {nombre: 'idea3', genero: 'Terror’', resumen: 'mucho miedo', votos: '3', autor: 'autor3'},
    {nombre: 'idea4', genero: 'Terror’', resumen: 'mucho miedo', votos: '4', autor: 'autor4'},
    {nombre: 'idea5', genero: 'Aventuras', resumen: 'mucha accion', votos: '5', autor: 'autor5'},
    {nombre: 'idea6', genero: 'Aventuras', resumen: 'mucha accion', votos: '6', autor: 'autor6'},
    {nombre: 'idea7', genero: 'Ciencia-Ficcion', resumen: 'mucha ciencia', votos: '7', autor: 'autor7'},
    {nombre: 'idea8', genero: 'Ciencia-Ficcion', resumen: 'mucha ciencia', votos: '8', autor: 'autor8'},
    {nombre: 'idea9', genero: 'Romatinca', resumen: 'mucho amor', votos: '9', autor: 'autor9'},
    {nombre: 'idea10', genero: 'Romatinca', resumen: 'mucho amor', votos: '10', autor: 'autor10'}
  ];
