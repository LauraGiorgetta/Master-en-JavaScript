import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprendiendo-angular';
  public descripcion:string;
  public config;
  public mostrar: boolean =  true;

  constructor(){
    this.title = Configuracion.titulo
    this.descripcion = Configuracion.descripcion
    this.config = Configuracion
  }

}
