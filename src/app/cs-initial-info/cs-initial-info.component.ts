import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
// import * as nj from "numjs";


@Component({
  selector: 'app-cs-initial-info',
  templateUrl: './cs-initial-info.component.html',
  styleUrls: ['./cs-initial-info.component.css']
})
export class CsInitialInfoComponent implements OnInit {

  // arr = ndarray.arange(4*4).reshape(4,4);
  

  msg: string = 'Metodo simplex';
  variables_decision: number;
  restricciones: number;
  metodos: Array<string>;
  matriz: Array<number[]>;
  funcion: Array<number> = new Array(this.variables_decision);
  matriz_2;

  opciones: Array<string> = ["<","<=",">=",">","="]; 
  simbolo_elegido: string;
  simbolos_elegidos: Array<string> = []; 
  valores_elegidos: Array<number> = []; 
  idx:number;
  boton_tabla = false;
  ver_tabla = false;
  valores_z: Array<number> = []

  constructor() {
  }

  ngOnInit() {
  }




  clicked () {
    this.matriz = [];
    this.simbolos_elegidos = []; 
    this.valores_elegidos = []; 
    console.log(this.variables_decision);
    console.log(this.restricciones);

    for (let i = 0; i < this.restricciones; i++) {
      this.matriz.push([]);
      this.simbolos_elegidos.push("");
      this.valores_elegidos.push(0);
      this.valores_z.push(0);
      for (let o = 0; o < (+this.variables_decision); o++) {
        this.matriz[i].push(0);
      }
    }

    console.log(this.matriz);
    // this.matriz_2 = this.matriz.slice();
  }

  add_row () {
    console.log(this.simbolo_elegido);
    console.log(this.simbolos_elegidos);
    console.log(this.valores_elegidos);
    console.log(this.matriz);
    console.log(this.valores_z); 
    // this.simbolos_elegidos.push(this.simbolo_elegido);
    this.boton_tabla = !this.boton_tabla;
  }

  mostrar_tabla() {
    this.ver_tabla = !this.ver_tabla;
  }


}
