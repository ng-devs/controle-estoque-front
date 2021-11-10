import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ceApplyMaterialTheme]',
})
export class ApplyMaterialThemeDirective implements OnInit {
  @Input() color!: string;
  @Input() theme!: string;

  @HostBinding('style.color') elementStyleBackground!: string;

  ngOnInit(): void {
    this.applyMaterialColor(this.color, this.theme);
  }

  applyMaterialColor(colorName: string, theme: string): void {
    const THEME_COLORS = [
      {
        theme: 'DeepPurpleEAmber',
        name: 'primary',
        hexadecimal: '#673ab7',
      },
      {
        theme: 'DeepPurpleEAmber',
        name: 'accent',
        hexadecimal: '#ffd740',
      },
      {
        theme: 'DeepPurpleEAmber',
        name: 'warn',
        hexadecimal: '#f44336',
      },
      {
        theme: 'IndigoEPink',
        name: 'primary',
        hexadecimal: '#3f51b5',
      },
      {
        theme: 'IndigoEPink',
        name: 'accent',
        hexadecimal: '#ff4081',
      },
      {
        theme: 'IndigoEPink',
        name: 'warn',
        hexadecimal: '#f44336',
      },
      {
        theme: 'PinkEBlueGrey',
        name: 'primary',
        hexadecimal: '#e91e63',
      },
      {
        theme: 'PinkEBlueGrey',
        name: 'accent',
        hexadecimal: '#607d8b',
      },
      {
        theme: 'PinkEBlueGrey',
        name: 'warn',
        hexadecimal: '#f44336',
      },
      {
        theme: 'PurpleEGreen',
        name: 'primary',
        hexadecimal: '#9c27b0',
      },
      {
        theme: 'PurpleEGreen',
        name: 'accent',
        hexadecimal: '#69f0ae',
      },
      {
        theme: 'PurpleEGreen',
        name: 'warn',
        hexadecimal: '#f44336',
      },
    ];

    const selectedTheme = THEME_COLORS.find(
      (themeColors) =>
        themeColors.name == colorName && themeColors.theme == theme
    );

    console.log('teste');
    console.log(selectedTheme);
    console.log(colorName);
    console.log(theme);

    if (!selectedTheme) return;

    this.elementStyleBackground = selectedTheme.hexadecimal;
  }
}
