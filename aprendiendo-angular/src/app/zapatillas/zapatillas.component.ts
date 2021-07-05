import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent implements OnInit {
  public titulo:string
  public listado: string

  constructor() { 
    this.titulo = 'Componente de zapatillas'
    this.listado = 'Lista de zapatillas'
  }

  ngOnInit(): void {
  }

}
