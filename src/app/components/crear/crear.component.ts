import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit, OnChanges {
  @Input() activo: boolean;
  @Output() usuarioNuevo = new EventEmitter();
  @Output() usuarioEditado = new EventEmitter();
  @Input() usuarioEditar: any;
  
  accion: string = 'crear'
  indice: number = null
  mensajeError: string = ''
  formulario: any = {
    nombre    : '',
    correo    : '',
    direccion : ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('cambios', this.usuarioEditar)
    if(this.usuarioEditar == null) {
      this.accion = 'crear'
    } else {
      this.formulario = this.usuarioEditar
      this.accion = 'editar'
      this.indice = this.usuarioEditar.indice;
    }
  }

  validarFormulario(): boolean {
    if(this.formulario.nombre.length == 0){
      $("#mensaje__toast").toast('show')
      this.mensajeError = 'El campo "nombre" no puede estar vacío'
      return false
    } else if(this.formulario.correo.length == 0){
      $("#mensaje__toast").toast('show')
      this.mensajeError = 'El campo "correo" no puede estar vacío'
      return false
    } else if(this.formulario.direccion.length == 0){
      $("#mensaje__toast").toast('show')
      this.mensajeError = 'El campo "dirección" no puede estar vacío'
      return false
    }
    return true
  }


  guardarUsuario() {
    if(this.validarFormulario()){
      if(this.accion == 'crear') {
        this.accionCrear()
      } else {
        this.accionEditar()
      }
    }
  }

  accionCrear() {
    let usuarios : any = localStorage.getItem('usuarios_nectia')
    let datos = []
    datos = (usuarios == null || usuarios == 'null')? [] : JSON.parse(usuarios)
    datos.push(this.formulario)
    localStorage.setItem('usuarios_nectia', JSON.stringify(datos))
    this.usuarioNuevo.emit(this.formulario);
  }

  accionEditar() {
    let usuarios : any = localStorage.getItem('usuarios_nectia')
    let datos = []
    datos = (usuarios == null || usuarios == 'null')? [] : JSON.parse(usuarios)
    datos[this.indice] = this.formulario 
    localStorage.setItem('usuarios_nectia', JSON.stringify(datos))
    this.usuarioEditado.emit(this.formulario);
  }

}
