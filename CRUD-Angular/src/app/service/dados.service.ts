import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private dados: any = [
    {
      id: "1", titulo: "Cruella", descricao: "O filme 101 Dálmatas.", data: "1630928327902"
    },
    {
      id: "2", titulo: "Luca", descricao: "Luca é um monstro marinho", data: "1630928327902"
    },
    {
      id: "3", titulo: "Em um Bairro de Nova York", descricao: "Em um Bairro de Nova York", data: "1630928327902"
    },
  ]

  constructor() { }

  getLista(){
    return this.dados;
  }

  adicionarLista(dados: any){
    return this.dados.push(dados);
  }
}
