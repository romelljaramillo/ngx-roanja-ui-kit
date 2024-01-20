import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import {
  AccordionComponent,
  BtnThemeModeComponent,
  BtnComponent,
  Item,
} from '../../projects/ngx-rj-ui-kit/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FontAwesomeModule,
    AccordionComponent,
    BtnThemeModeComponent,
    BtnComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Title from app.component.ts';
  faCoffee = faCoffee;

  items: Item[] = [
    { title: 'Item 1', content: 'Contenido 1' },
    { title: 'Item 2', content: 'Contenido 2' },
    { title: 'Item 2', content: 'Contenido 3' },
  ];
}
