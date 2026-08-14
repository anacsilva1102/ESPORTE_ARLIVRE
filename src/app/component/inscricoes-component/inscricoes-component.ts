import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-inscricoes-component',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './inscricoes-component.html',
    styleUrl: './inscricoes-component.css'
})
export class InscricoesComponent {

    atletas: any[] = [];

    corridas: any[] = [];

    corridaSelecionada: any = null;

    inscricao = {
        atleta: '',
        cpf: '',
        corrida: '',
        distancia: '',
        camiseta: '',
        categoria: '',
        termos: false
    };

    constructor() {
        this.carregarDados();
    }

    carregarDados() {

        this.atletas = JSON.parse(
            localStorage.getItem('atletas') || '[]'
        );

        this.corridas = JSON.parse(
            localStorage.getItem('corridas') || '[]'
        );

        const corridaSalva = localStorage.getItem(
            'corridaSelecionada'
        );

        if (corridaSalva) {

            this.corridaSelecionada =
                JSON.parse(corridaSalva);

            this.inscricao.corrida =
                this.corridaSelecionada.descricao;
        }
    }

    selecionarAtleta() {

        const atletaSelecionado = this.atletas.find(
            atleta =>
                atleta.nome === this.inscricao.atleta
        );

        if (atletaSelecionado) {

            this.inscricao.cpf =
                atletaSelecionado.cpf;

        } else {

            this.inscricao.cpf = '';

        }
    }

    finalizarInscricao() {

        if (
            !this.inscricao.atleta ||
            !this.inscricao.cpf ||
            !this.inscricao.corrida ||
            !this.inscricao.distancia ||
            !this.inscricao.camiseta ||
            !this.inscricao.categoria ||
            !this.inscricao.termos
        ) {

            alert('Preencha todos os campos!');

            return;
        }

        const inscricoes = JSON.parse(
            localStorage.getItem('inscricoes') || '[]'
        );

        inscricoes.push(this.inscricao);

        localStorage.setItem(
            'inscricoes',
            JSON.stringify(inscricoes)
        );

        alert('Inscrição realizada com sucesso!');

        this.limparFormulario();
    }

    limparFormulario() {

        this.inscricao = {
            atleta: '',
            cpf: '',
            corrida: '',
            distancia: '',
            camiseta: '',
            categoria: '',
            termos: false
        };

        this.corridaSelecionada = null;

        localStorage.removeItem(
            'corridaSelecionada'
        );
    }
}