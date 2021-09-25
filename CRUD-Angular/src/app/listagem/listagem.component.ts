import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DadosService } from '../service/dados.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  public listagens: any = [];

  constructor(private route: Router, private dadosService: DadosService) { }

  ngOnInit(): void {
    this.listagem();
  }

  LogarCadastro(){
    this.route.navigate(['cadastro'])
  }

  listagem(){
      this.listagens = this.dadosService.getLista();
      console.log(this.listagens);
  }

}
