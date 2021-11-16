import { Directive, HostBinding, Input } from '@angular/core';
import { THEME_COLORS } from './theme-colors.data';
import { ColorName } from './theme-colors.model';

@Directive({
  selector: '[ceApplyMaterialTheme]',
})
export class ApplyMaterialThemeDirective {
  private colorName: ColorName;

  @Input() set ceApplyMaterialTheme(colorName: ColorName) {
    this.colorName = colorName || 'primary';
    this.applyMaterialColor();
  }

  @HostBinding('style.color') elementStyleBackground!: string;

  applyMaterialColor(): void {
    const selectedTheme = THEME_COLORS.find(
      (themeColors) => themeColors.name == this.colorName
    );
    if (!selectedTheme) return;
    this.elementStyleBackground = selectedTheme.hexadecimal;
  }
}
