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

  verModalCrear(): void {
    this.usuarioActual = null
  }

  usuarioCreado(evento) {
    this.usuarios.push(evento)
    $('#modal__crear').modal('hide')
  }

  usuarioActualizado(evento) {
    this.usuarios[evento.indice] = evento
    $("#modal__crear").modal('hide')
  }

  editarUsuario(usuario: any, indice: number) {
    usuario.indice = indice
    this.usuarioActual = usuario
    $("#modal__crear").modal()
  }

  eliminarUsuario(usuario: any, indice: number) {
    let usuarios : any = localStorage.getItem('usuarios_nectia')
    let datos = []
    datos = (usuarios == null || usuarios == 'null')? [] : JSON.parse(usuarios)
    datos.splice(indice, 1)
    localStorage.setItem('usuarios_nectia', JSON.stringify(datos))
    this.usuarios = datos
  }

}
