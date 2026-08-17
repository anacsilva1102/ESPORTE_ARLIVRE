import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AtletaService } from '../../service/atleta.service';

@Component({
    selector: 'app-atleta-component',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './atleta-component.html',
    styleUrl: './atleta-component.css'
})
export class AtletaComponent {

    constructor(private atletaService: AtletaService) { }


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


        this.atletaService.salvarAtleta(this.atleta).subscribe({

            next: (resposta) => {

                console.log('Atleta cadastrado:', resposta);

                alert('Atleta cadastrado com sucesso!');

                this.limparFormulario();

            },

            error: (erro) => {

                console.error('Erro ao cadastrar atleta:', erro);

                alert('Erro ao cadastrar atleta.');

            }

        });

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