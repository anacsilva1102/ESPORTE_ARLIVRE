import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './component/menu-component/menu-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  template: `
    <app-menu-component></app-menu-component>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  protected readonly title = signal('EsporteArlivre');

}