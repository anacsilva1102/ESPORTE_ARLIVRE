import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-corrida-component',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './corrida-component.html',
    styleUrl: './corrida-component.css'
})
export class CorridaComponent {

    corrida = {
        descricao: '',
        data: '',
        km5: false,
        km10: false,
        km25: false
    };


    cadastrarCorrida() {

        if (
            !this.corrida.descricao ||
            !this.corrida.data
        ) {
            alert('Preencha a descrição e a data da corrida!');
            return;
        }


        if (
            !this.corrida.km5 &&
            !this.corrida.km10 &&
            !this.corrida.km25
        ) {
            alert('Selecione pelo menos uma distância!');
            return;
        }


        const corridas =
            JSON.parse(localStorage.getItem('corridas') || '[]');


        const distancias = [];

        if (this.corrida.km5) {
            distancias.push('5km');
        }

        if (this.corrida.km10) {
            distancias.push('10km');
        }

        if (this.corrida.km25) {
            distancias.push('25km');
        }


        corridas.push({
            descricao: this.corrida.descricao,
            data: this.corrida.data,
            distancias: distancias.join(', ')
        });


        localStorage.setItem(
            'corridas',
            JSON.stringify(corridas)
        );


        alert('Corrida cadastrada com sucesso!');

        this.limparFormulario();
    }


    limparFormulario() {

        this.corrida = {
            descricao: '',
            data: '',
            km5: false,
            km10: false,
            km25: false
        };

    }

}