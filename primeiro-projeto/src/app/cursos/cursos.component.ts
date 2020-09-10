import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

  constructor(private _cursosService: CursosService) {

    this.nomePortal = 'http://loiane.training';

    this.cursos = this._cursosService.getCursos();

  }

  ngOnInit(): void {
  }

}
