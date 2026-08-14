import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-atleta-component',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './atleta-component.html',
    styleUrl: './atleta-component.css'
})
export class AtletaComponent {

    estados = [
        { nome: 'Acre', uf: 'AC' },
        { nome: 'Alagoas', uf: 'AL' },
        { nome: 'Amapá', uf: 'AP' },
        { nome: 'Amazonas', uf: 'AM' },
        { nome: 'Bahia', uf: 'BA' },
        { nome: 'Ceará', uf: 'CE' },
        { nome: 'Distrito Federal', uf: 'DF' },
        { nome: 'Espírito Santo', uf: 'ES' },
        { nome: 'Goiás', uf: 'GO' },
        { nome: 'Maranhão', uf: 'MA' },
        { nome: 'Mato Grosso', uf: 'MT' },
        { nome: 'Mato Grosso do Sul', uf: 'MS' },
        { nome: 'Minas Gerais', uf: 'MG' },
        { nome: 'Pará', uf: 'PA' },
        { nome: 'Paraíba', uf: 'PB' },
        { nome: 'Paraná', uf: 'PR' },
        { nome: 'Pernambuco', uf: 'PE' },
        { nome: 'Piauí', uf: 'PI' },
        { nome: 'Rio de Janeiro', uf: 'RJ' },
        { nome: 'Rio Grande do Norte', uf: 'RN' },
        { nome: 'Rio Grande do Sul', uf: 'RS' },
        { nome: 'Rondônia', uf: 'RO' },
        { nome: 'Roraima', uf: 'RR' },
        { nome: 'Santa Catarina', uf: 'SC' },
        { nome: 'São Paulo', uf: 'SP' },
        { nome: 'Sergipe', uf: 'SE' },
        { nome: 'Tocantins', uf: 'TO' }
    ];

    municipios: any[] = [];

    carregandoMunicipios = false;

    atleta = {
        nome: '',
        cpf: '',
        sexo: '',
        cep: '',
        rua: '',
        bairro: '',
        municipio: '',
        uf: ''
    };


    async carregarMunicipios() {

        this.municipios = [];

        this.atleta.municipio = '';

        if (!this.atleta.uf) {
            return;
        }

        this.carregandoMunicipios = true;

        try {

            const resposta = await fetch(
                `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${this.atleta.uf}/municipios`
            );

            if (!resposta.ok) {
                throw new Error('Erro ao buscar municípios');
            }

            this.municipios = await resposta.json();

        } catch (erro) {

            console.error(erro);

            alert('Não foi possível carregar os municípios.');

        } finally {

            this.carregandoMunicipios = false;

        }
    }


    cadastrarAtleta() {

        if (
            !this.atleta.nome ||
            !this.atleta.cpf ||
            !this.atleta.sexo ||
            !this.atleta.cep ||
            !this.atleta.rua ||
            !this.atleta.bairro ||
            !this.atleta.municipio ||
            !this.atleta.uf
        ) {

            alert('Preencha todos os campos!');

            return;
        }


        const atletas =
            JSON.parse(
                localStorage.getItem('atletas') || '[]'
            );


        atletas.push(this.atleta);


        localStorage.setItem(
            'atletas',
            JSON.stringify(atletas)
        );


        alert('Atleta cadastrado com sucesso!');


        this.limparFormulario();

    }


    limparFormulario() {

        this.atleta = {
            nome: '',
            cpf: '',
            sexo: '',
            cep: '',
            rua: '',
            bairro: '',
            municipio: '',
            uf: ''
        };

        this.municipios = [];

    }

}