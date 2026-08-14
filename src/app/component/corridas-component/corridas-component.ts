import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-corridas-component',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './corridas-component.html',
    styleUrl: './corridas-component.css'
})
export class CorridasComponent {

    corridas: any[] = [];


    ngOnInit() {

        this.carregarCorridas();

    }


    carregarCorridas() {

        this.corridas =
            JSON.parse(
                localStorage.getItem('corridas') || '[]'
            );

    }


    inscrever(corrida: any) {

        localStorage.setItem(
            'corridaSelecionada',
            JSON.stringify(corrida)
        );

        alert(
            'Corrida selecionada! Vá para a tela de inscrição.'
        );

    }

}