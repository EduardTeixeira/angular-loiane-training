import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ['Angular'];

  mostrarCursos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
