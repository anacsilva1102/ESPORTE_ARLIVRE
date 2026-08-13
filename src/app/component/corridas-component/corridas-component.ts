import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-corridas-component',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './corridas-component.html',
    styleUrl: './corridas-component.css'
})
export class CorridasComponent {}
