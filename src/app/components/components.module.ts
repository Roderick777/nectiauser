import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [CrearComponent, ListadoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[CrearComponent]
})
export class ComponentsModule { }
