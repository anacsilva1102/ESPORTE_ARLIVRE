import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

import { CorridaService } from '../../../service/corrida/corrida-service';
import { corrida } from '../../../models/corrida';

@Component({
  selector: 'app-corrida-lista-component',
  standalone: true,
  imports: [],
  templateUrl: './corrida-lista-component.html',
  styleUrl: './corrida-lista-component.css',
})
export class CorridaListaComponent {

  listaCorridas = signal<corrida[]>([]);

  constructor(
    private corridaService: CorridaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listar();
  }

  listar() {

    this.corridaService.listarCorridas()
      .subscribe({

        next: (dadosCorrida: corrida[]) => {

          this.listaCorridas.set([...dadosCorrida]);

        },

        error: (msgErro: any) => {

          console.log('Erro ao listar corridas:', msgErro);

        }

      });

  }

  editarCorrida(objCorrida: corrida) {

    this.router.navigate([
      '/corrida',
      objCorrida.id
    ]);

  }

  excluir(objCorrida: corrida) {

    if (confirm(`Deseja excluir a corrida ${objCorrida.descricao_corrida}?`)) {

      this.corridaService.excluirCorrida(objCorrida.id)
        .subscribe({

          next: (resposta: corrida) => {

            this.listaCorridas.update(
              lista => lista.filter(
                item => item.id !== objCorrida.id
              )
            );

            console.log(
              'Corrida excluída com sucesso!',
              resposta
            );

          },

          error: (msgErro: any) => {

            console.log(
              'Erro ao excluir corrida:',
              msgErro
            );

          }

        });

    }

  }

}