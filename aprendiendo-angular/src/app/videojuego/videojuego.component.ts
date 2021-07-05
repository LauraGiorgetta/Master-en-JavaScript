import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string
  public listado: string
  constructor() {
    this.titulo = 'Componente de Videojuegos'
    this.listado = 'Listado de videojuegos'
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('OnInit')
  }

  ngDoCheck() {
    console.log('DoCheck')
  }
  ngOnDestroy(){
    console.log('OnDestroy')
  }
  cambiarTitulo(titulo: string) {
    this.titulo = titulo
  }
}
