import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CrearComponent } from './components/crear/crear.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { BuscadorPipe } from './buscador.pipe';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BuscadorPipe  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    CrearComponent,
  ]
})
export class AppModule { }
