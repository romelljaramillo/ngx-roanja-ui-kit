import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

export interface Item {
  title?: string | undefined;
  content: string;
}

@Component({
  selector: 'rjb-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent implements OnInit {
    /**
   * @description items to display in the accordion
   * @default []
   * @type {Item[]}
   * @memberof RjAccordionComponent
   * @example
   * <rjb-accordion [items]="items"></rjb-accordion>
   */
    @Input() items: Item[] = [];

    /**
     * @description id for the accordion
     * @default rjaccordion
     * @type {string}
     * @memberof RjAccordionComponent
     * @example
     * <rjb-accordion [items]="items" id="rjaccordion"></rjb-accordion>
     */
    @Input() id: string = 'rjaccordion';
  
    /**
     * @description active item index expanded by default undefined value (starts at 0 to n-items)
     * @default undefined
     * @type {number}
     * @memberof RjAccordionComponent
     * @example
     * <rjb-accordion [items]="items" [showItem]="0"></rjb-accordion>
     */
    @Input() showItem: number | undefined = undefined;
  
    /**
     * @description show all items expanded by default false value
     * @default false
     * @type {boolean}
     * @memberof RjAccordionComponent
     * @example
     * <rjb-accordion [items]="items" [showAll]="true"></rjb-accordion>
     */
    @Input() showAll: boolean = false;
  
    ngOnInit(): void {
      if (this.showAll) {
        this.showItem = undefined;
      }
    }
}
