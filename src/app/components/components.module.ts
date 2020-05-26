import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [CrearComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[CrearComponent]
})
export class ComponentsModule { }
