import { DadosService } from './../service/dados.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {



  constructor(private route: Router, private service: DadosService ) { }

  ngOnInit(): void {
  }

  cancelarCadastro(){
    return this.route.navigate(['listagem']);
  }

  // salvar(){
  //   this.service.adicionarLista();
  // }

}
