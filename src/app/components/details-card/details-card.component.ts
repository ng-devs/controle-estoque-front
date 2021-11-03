import { Component, Input, OnInit } from '@angular/core';

type Month = number | Date | null;

interface Color {
  name: string;
  hexadecimal: string;
}

@Component({
  selector: 'ce-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss'],
})
export class DetailsCardComponent implements OnInit {
  @Input() title?: string;
  @Input() month?: Month;
  @Input() contentNumber?: number;
  @Input() detailColor?: string;

  selectedColor!: Color;

  ngOnInit(): void {
    this.selectedColor = this.selectThemeColorIndigoEPink(this.detailColor);
  }

  selectThemeColorIndigoEPink(selectedColor: string = 'basic'): Color {
    const colors = [
      {
        name: 'basic',
        hexadecimal: '#000000',
      },
      {
        name: 'primary',
        hexadecimal: '#3f51b5',
      },
      {
        name: 'accent',
        hexadecimal: '#ff4081',
      },
      {
        name: 'warn',
        hexadecimal: '#f44336',
      },
    ];

    const selectedColorObj = colors.find(
      (color) => color.name == selectedColor
    );

    return selectedColorObj ?? colors[0];
  }
}
