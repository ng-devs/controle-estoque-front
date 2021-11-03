import { Component } from '@angular/core';

@Component({
  selector: 'ce-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'controle-estoque-front';
  date = new Date('2001-09-24');
}
