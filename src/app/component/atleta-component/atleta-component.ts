import { Component } from '@angular/core';

@Component({
    selector: 'app-atleta-component',
    standalone: true,
    imports: [],
    templateUrl: './atleta-component.html',
    styleUrl: './atleta-component.css'
})
export class AtletaComponent {

    mensagem = '';

    cadastrarAtleta() {
        this.mensagem = 'Atleta cadastrado com sucesso!';
    }
}