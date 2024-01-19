import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'rjb-btn',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
  >
  <i [ngClass]="onIcon"></i>
    {{ label }}
  </button>
  `,
  styleUrl: './btn.component.css',
})
export class BtnComponent { 
  
  @Input()
  type: 'primary' |  'secondary' |  'success' |  'info' |  'warning' |  'danger' |  'light' |  'dark' | 'link' |
  'outline-primary' |  'outline-secondary' |  'outline-success' |  'outline-info' |  'outline-warning' |  
  'outline-danger' |  'outline-light' |  'outline-dark' | 'outline-link' = 'light';

  @Input()
  size: 'sm' | 'md' | 'lg' = 'md';

  @Input()
  label = 'Button';

  @Input()
  icon = 'coffee';

  @Output() onClick = new EventEmitter<Event>();


  constructor() {}

  public get classes(): string[] {

    return ['btn', `btn-${this.type}`, `btn-${this.size}`];
  }

  public get onIcon(): string {
    return `fa fa-${this.icon}`;
  }

}

