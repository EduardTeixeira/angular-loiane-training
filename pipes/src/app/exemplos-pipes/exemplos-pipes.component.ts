import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Estruturas de Dados e Algoritmos com JavaScript',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://www.amazon.com.br/Estruturas-Dados-Algoritmos-Com-Javascript/dp/8575226932/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=VETXARE44TNQ&keywords=loiane&qid=1662473939&sprefix=loian%2Caps%2C202&sr=8-1',
  };

  constructor() { }

  ngOnInit() {
  }

}
