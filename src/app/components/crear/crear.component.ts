import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit, OnChanges {
  @Output() usuarioNuevo = new EventEmitter();
  @Output() usuarioEditado = new EventEmitter();
  @Input() activo: boolean;
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

  // Cada vez que el componene recibe cambios verifica si va a crear o editar y realiza las preparaciones necesarias
  ngOnChanges(): void {
    console.log('cambios', this.usuarioEditar)
    if(this.usuarioEditar == null) {
      this.accion = 'crear'
      this.reiniciarForm()
    } else {
      let parsear = JSON.stringify(this.usuarioEditar)
      this.formulario = JSON.parse(parsear)
      this.accion = 'editar'
      this.indice = this.usuarioEditar.indice;
    }
  }

  //Limpiar el formulario con los valores por defecto
  reiniciarForm() {
    this.formulario = {
      nombre    : '',
      correo    : '',
      direccion : ''
    }
  }

  // Función que permite validar que los campos del formulario no estén vacios
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
    } else if(!this.validarEmail(this.formulario.correo)){
      $("#mensaje__toast").toast('show')
      this.mensajeError = 'Ingrese un correo válido'
      return false
    }
    return true
  }

  validarEmail(valor) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
      return true
    } else {
     return false
    }
  }

  // Funcion que guarda los datos del formulario, crea o actualiza segun corresponda
  guardarUsuario() {
    if(this.validarFormulario()){
      if(this.accion == 'crear') {
        this.accionCrear()
        this.reiniciarForm()
      } else {
        this.accionEditar()
        this.reiniciarForm()
      }
    }
  }

  // Accion para crear un usuario
  accionCrear() {
    let usuarios : any = localStorage.getItem('usuarios_nectia')
    let datos = []
    datos = (usuarios == null || usuarios == 'null')? [] : JSON.parse(usuarios)
    datos.push(this.formulario)
    localStorage.setItem('usuarios_nectia', JSON.stringify(datos))
    this.usuarioNuevo.emit(this.formulario);
  }

  // Accion para editar un usuario
  accionEditar() {
    let usuarios : any = localStorage.getItem('usuarios_nectia')
    let datos = []
    datos = (usuarios == null || usuarios == 'null')? [] : JSON.parse(usuarios)
    datos[this.indice] = this.formulario 
    localStorage.setItem('usuarios_nectia', JSON.stringify(datos))
    this.usuarioEditado.emit(this.formulario);
  }

}
