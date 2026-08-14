import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-inscricoes-component',
    standalone: true,
    imports: [
        FormsModule,
        CommonModule
    ],
    templateUrl: './inscricoes-component.html',
    styleUrl: './inscricoes-component.css'
})
export class InscricoesComponent implements OnInit {

    atletas: any[] = [];

    corridas: any[] = [];


    inscricao = {
        atleta: '',
        cpf: '',
        corrida: '',
        distancia: '',
        camiseta: '',
        categoria: '',
        termos: false
    };


    ngOnInit() {

        this.carregarAtletas();

        this.carregarCorridas();

    }


    carregarAtletas() {

        this.atletas =
            JSON.parse(
                localStorage.getItem('atletas') || '[]'
            );

    }


    carregarCorridas() {

        this.corridas =
            JSON.parse(
                localStorage.getItem('corridas') || '[]'
            );

    }


    finalizarInscricao() {

        if (
            !this.inscricao.atleta ||
            !this.inscricao.corrida ||
            !this.inscricao.distancia ||
            !this.inscricao.camiseta ||
            !this.inscricao.categoria
        ) {
            alert('Preencha todos os campos!');
            return;
        }


        if (!this.inscricao.termos) {

            alert(
                'Você precisa aceitar os termos do regulamento.'
            );

            return;
        }


        const inscricoes =
            JSON.parse(
                localStorage.getItem('inscricoes') || '[]'
            );


        inscricoes.push({
            atleta: this.inscricao.atleta,
            cpf: this.inscricao.cpf,
            corrida: this.inscricao.corrida,
            distancia: this.inscricao.distancia,
            camiseta: this.inscricao.camiseta,
            categoria: this.inscricao.categoria,
            valor: 89.90
        });


        localStorage.setItem(
            'inscricoes',
            JSON.stringify(inscricoes)
        );


        alert(
            'Inscrição realizada com sucesso!'
        );


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

    }

}