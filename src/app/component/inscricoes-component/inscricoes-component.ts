import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-inscricoes-component',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './inscricoes-component.html',
    styleUrl: './inscricoes-component.css'
})
export class InscricoesComponent {

    nome = '';
    cpf = '';
    corrida = '';

    mensagem = '';

    realizarInscricao() {

        this.mensagem =
            'Inscrição realizada com sucesso!';

    }
}