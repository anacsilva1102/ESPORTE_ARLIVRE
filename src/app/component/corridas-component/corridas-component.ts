import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-corridas-component',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './corridas-component.html',
    styleUrl: './corridas-component.css'
})
export class CorridasComponent {

    corridas: any[] = [];

    constructor(private router: Router) {
        this.carregarCorridas();
    }

    carregarCorridas() {
        this.corridas = JSON.parse(
            localStorage.getItem('corridas') || '[]'
        );
    }

    inscrever(corrida: any) {

        localStorage.setItem(
            'corridaSelecionada',
            JSON.stringify(corrida)
        );

        this.router.navigateByUrl('/inscricoes');

    }

}