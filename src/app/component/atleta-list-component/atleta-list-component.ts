import { Component, OnInit } from '@angular/core';
import { Atleta } from '../../models/atleta';
import { AtletaService } from '../../service/atleta.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atleta-list-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atleta-list-component.html',
  styleUrl: './atleta-list-component.css'
})
export class AtletaListComponent implements OnInit {

  listaAtletas: Atleta[] = [];

  constructor(
    private listaService: AtletaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {

    this.listaService.listarAtletas().subscribe({

      next: (dadosAtletas) => {

        this.listaAtletas = [...dadosAtletas];

        this.listaAtletas.sort((a, b) =>
          a.nome.localeCompare(b.nome)
        );

        console.log(this.listaAtletas);

      },

      error: (msgErro) => {

        console.log('Erro ao listar Atletas', msgErro);

      }

    });

  }

  excluir(idAtleta: number | undefined) {

    if (idAtleta === undefined) {
      return;
    }

    if (!confirm('Deseja realmente excluir este atleta?')) {
      return;
    }

    this.listaService.excluirAtleta(idAtleta).subscribe({

      next: () => {

        alert('Atleta excluído com sucesso!');

        this.listar();

      },

      error: (erro) => {

        console.error('Erro ao excluir atleta:', erro);

        alert('Erro ao excluir atleta.');

      }

    });

  }

}