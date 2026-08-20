import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { corrida } from '../../../models/corrida';
import { CorridaService } from '../../../service/corrida/corrida-service';

@Component({
  selector: 'app-corrida-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './corrida-component.html',
  styleUrl: './corrida-component.css',
})
export class CorridaComponent {

  id = 0;

  descricao_corrida = '';
  data_corrida = '';

  distancia5km = false;
  distancia10km = false;
  distancia25km = false;

  editar = false;

  constructor(
    private corridaService: CorridaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    this.id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    if (this.id > 0) {

      this.editar = true;

      this.carregarCorrida(this.id);

    }

  }

  carregarCorrida(id: number) {

    this.corridaService.listarCorrida(id)
      .subscribe({

        next: (dadosCorrida: corrida) => {

          this.descricao_corrida =
            dadosCorrida.descricao_corrida;

          this.data_corrida =
            dadosCorrida.data_corrida;

          this.distancia5km =
            dadosCorrida.distancia5km;

          this.distancia10km =
            dadosCorrida.distancia10km;

          this.distancia25km =
            dadosCorrida.distancia25km;

        },

        error: (msgErro: any) => {

          console.log(
            'Erro ao carregar corrida:',
            msgErro
          );

        }

      });

  }

  dadosFormulario() {

    const corridaNova = new corrida();

    corridaNova.descricao_corrida =
      this.descricao_corrida;

    corridaNova.data_corrida =
      this.data_corrida;

    corridaNova.distancia5km =
      this.distancia5km;

    corridaNova.distancia10km =
      this.distancia10km;

    corridaNova.distancia25km =
      this.distancia25km;


    if (this.editar) {

      corridaNova.id = this.id;

      this.corridaService
        .alterarCorrida(corridaNova)
        .subscribe({

          next: (resposta: corrida) => {

            console.log(
              'Corrida alterada com sucesso!',
              resposta
            );

            this.router.navigate(['/corridas']);

          },

          error: (msgErro: any) => {

            console.log(
              'Erro ao alterar corrida:',
              msgErro
            );

          }

        });

    } else {

      this.corridaService
        .salvarCorrida(corridaNova)
        .subscribe({

          next: (resposta: corrida) => {

            console.log(
              'Corrida cadastrada com sucesso!',
              resposta
            );

            this.limparAtributos();

          },

          error: (msgErro: any) => {

            console.log(
              'Erro ao cadastrar corrida:',
              msgErro
            );

          }

        });

    }

  }

  limparAtributos() {

    this.descricao_corrida = '';
    this.data_corrida = '';

    this.distancia5km = false;
    this.distancia10km = false;
    this.distancia25km = false;

  }

}