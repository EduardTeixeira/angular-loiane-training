import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  //Http

  constructor() { }

  getCursos() {
    return ['Java', 'Ext JS', 'Angular'];
  }

}
