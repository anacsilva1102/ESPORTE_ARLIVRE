import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AtletaService } from '../../service/atleta.service';
import { Atleta } from '../../models/atleta';

@Component({
  selector: 'app-atleta-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css'
})
export class AtletaComponent {

  nome = '';
  cpf = 0;
  sexo = '';
  cep = 0;
  ruaLogradouro = '';
  bairro = '';
  cidade = '';
  uf = '';

  idAtleta = 0;
  editar = false;

  constructor(
    private atletaService: AtletaService,
    private http: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  exibirDados() {
    console.log(
      this.nome,
      this.cpf,
      this.sexo,
      this.cep,
      this.ruaLogradouro,
      this.bairro,
      this.cidade,
      this.uf
    );

    this.limparDados();
  }

  ngOnInit() {
    this.idAtleta = Number(
      this.http.snapshot.paramMap.get('id')
    );

    if (this.idAtleta > 0) {
      this.editar = true;
      this.carregaDados(this.idAtleta);
    }
  }

  limparDados() {
    this.nome = '';
    this.cpf = 0;
    this.sexo = '';
    this.cep = 0;
    this.ruaLogradouro = '';
    this.bairro = '';
    this.cidade = '';
    this.uf = '';
  }

  carregaDados(idAtleta: number) {

    this.atletaService.listarAtleta(idAtleta)
      .subscribe({

        next: (dadosAtleta: Atleta) => {

          this.nome = dadosAtleta.nome;
          this.cpf = dadosAtleta.cpf;
          this.sexo = dadosAtleta.sexo;
          this.cep = dadosAtleta.cep;
          this.ruaLogradouro = dadosAtleta.ruaLogradouro;
          this.bairro = dadosAtleta.bairro;
          this.cidade = dadosAtleta.cidade;
          this.uf = dadosAtleta.uf;

          this.cdr.detectChanges();
        },

        error: (msgErro: any) => {
          console.log(
            'ERRO AO LISTAR ATLETA ',
            msgErro
          );
        }

      });
  }

  enviarDadosAtleta() {

    const atleta = new Atleta();

    atleta.nome = this.nome;
    atleta.cpf = this.cpf;
    atleta.sexo = this.sexo;
    atleta.cep = this.cep;
    atleta.ruaLogradouro = this.ruaLogradouro;
    atleta.bairro = this.bairro;
    atleta.cidade = this.cidade;
    atleta.uf = this.uf;

    if (this.editar) {

      atleta.id = this.idAtleta;

      this.atletaService.alterarAtleta(atleta)
        .subscribe({

          next: (resposta: Atleta) => {
            console.log(
              'Atleta alterado com sucesso!',
              resposta
            );
          },

          error: (msgErro: any) => {
            console.log(
              'Erro ao alterar atleta:',
              msgErro
            );
          }

        });

    } else {

      this.atletaService.adicionarAtleta(atleta)
        .subscribe({

          next: (resposta: Atleta) => {
            console.log(
              'Atleta cadastrado com sucesso!',
              resposta
            );
          },

          error: (msgErro: any) => {
            console.log(
              'Erro ao cadastrar atleta:',
              msgErro
            );
          }

        });
    }

    this.limparDados();
  }
}