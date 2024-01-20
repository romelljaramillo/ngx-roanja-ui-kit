import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color } from '../../interfaces/types.interface';

@Component({
  selector: 'rjb-btn',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button type="button" (click)="onClick.emit($event)" [ngClass]="classes" [disabled]="disabled">
      <i [ngClass]="onIcon"></i>
      {{ label }}
    </button>
  `,
  styleUrl: './btn.component.css',
})
export class BtnComponent {

  @Input()
  type: Color = 'primary';

  @Input()
  outline: boolean = false;

  @Input()
  size: 'sm' | 'md' | 'lg' = 'md';

  @Input()
  label = 'Button';

  @Input()
  icon = 'coffee';

  @Input()
  disabled = false;

  @Output() onClick = new EventEmitter<Event>();

  constructor() {}

  public get classes(): string[] {
    let btnType: string = `btn-${this.type}`;
    let size = '';

    if (this.outline) {
      btnType = `btn-outline-${this.type}`;
    }

    if (this.size) {
      size = `btn-${this.size}`;
    }

    return ['btn', btnType, size];

  }

  public get onIcon(): string {
    return `fa fa-${this.icon}`;
  }
}
