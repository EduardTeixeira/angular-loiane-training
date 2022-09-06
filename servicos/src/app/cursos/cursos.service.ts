import { EventEmitter, Injectable } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'Java', 'Python'];

  constructor(
    private _logService: LogService
  ) {
    console.log('CursosService...')
  }

  getCursos() {
    this._logService.consoleLog('Obtendo lista de cursos...');
    return this.cursos;
  }

  addCurso(curso: string) {
    this._logService.consoleLog(`Criando um novo curso ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}
