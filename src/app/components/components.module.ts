import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { FormsModule } from '@angular/forms';
import { SinUsuarioComponent } from './sin-usuario/sin-usuario.component';
import { ColoresComponent } from './colores/colores.component'



@NgModule({
  declarations: [CrearComponent, SinUsuarioComponent, ColoresComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[CrearComponent, SinUsuarioComponent, ColoresComponent]
})
export class ComponentsModule { }
