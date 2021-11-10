import { Component, Input } from '@angular/core';

type CustomDate = number | Date | null | string;
@Component({
  selector: 'ce-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss'],
})
export class DetailsCardComponent {
  @Input() title?: string;
  @Input() date?: CustomDate;
  @Input() contentNumber?: number;
  @Input() color!: string;
  @Input() theme!: string;
}
