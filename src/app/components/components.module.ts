import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { FormsModule } from '@angular/forms';
import { SinUsuarioComponent } from './sin-usuario/sin-usuario.component'



@NgModule({
  declarations: [CrearComponent, SinUsuarioComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[CrearComponent, SinUsuarioComponent]
})
export class ComponentsModule { }
