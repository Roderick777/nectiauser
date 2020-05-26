import { Component, OnInit } from '@angular/core';
import { faPlus, faEdit, faTrash, faAddressBook, faUser, faLocationArrow, faSearch } from '@fortawesome/free-solid-svg-icons';
declare var $: any;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;
  faAddressBook = faAddressBook; 
  faUser = faUser; 
  faSearch = faSearch;
  faLocationArrow = faLocationArrow;
  creando : boolean = true 
  usuarios : any = (localStorage.getItem('usuarios_nectia') == null)? null : JSON.parse(localStorage.getItem('usuarios_nectia'))
  usuarioActual = null
  busqueda: string = null

  constructor() { }

  // Accion que se ejecuta al hacer click en el boton agregar Usuarios
  verModalCrear(): void {
    this.usuarioActual = null
    $("#modal__crear").modal()
  }

  //Evento que se ejecuta luego de crear un nuevo usuario
  usuarioCreado(evento) {
    if(this.usuarios == null) {
      this.usuarios = []
    }
    this.usuarios.push(evento)
    $('#modal__crear').modal('hide')
  }
  
  //Evento que se ejecuta luego de crear un nuevo usuario
  usuarioActualizado(evento) {
    this.usuarios[evento.indice] = evento
    $("#modal__crear").modal('hide')
  }

  //Evento que se ejecuta antes de abrir el modal que permite editar los usuarios
  editarUsuario(usuario: any, indice: number) {
    usuario.indice = indice
    this.usuarioActual = usuario
    $("#modal__crear").modal()
  }

  //Funcion que quita un usuario del listado correspondiente al indice del elemento sobre el cual se ejecuta la acción
  eliminarUsuario(usuario: any, indice: number) {
    let tiempo : number = 500
    let c = this;
    $('#usuario_'+ indice).fadeOut(tiempo);
    setTimeout(function(){
      let usuarios : any = localStorage.getItem('usuarios_nectia')
      let datos = []
      datos = (usuarios == null || usuarios == 'null')? [] : JSON.parse(usuarios)
      datos.splice(indice, 1)
      localStorage.setItem('usuarios_nectia', JSON.stringify(datos))
      c.usuarios = datos
    }, tiempo * 2)
  }

}
