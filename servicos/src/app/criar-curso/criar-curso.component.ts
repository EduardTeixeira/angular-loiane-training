import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss']
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];
  constructor(
    private _cursosService: CursosService
  ) {
    this.cursos = this._cursosService.getCursos();
  }

  ngOnInit() {
  }

  onAddCurso(curso: string) {
    this._cursosService.addCurso(curso);
  }

}
