import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosService } from './cursos/cursos.service';
import { CursosModule } from './cursos/cursos.module';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CriarCursoModule,
    CursosModule
  ],
  providers: [
    CursosService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
