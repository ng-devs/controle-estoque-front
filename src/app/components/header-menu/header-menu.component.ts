import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ce-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit {
  cadItems = ['Categorias', 'Produtos', 'Formas de Pagamento'];
  menu: Menu[] = [
    {
      titulo: 'Cadastro',
      menu: [
        {
          titulo: 'Categorias',
          url: 'cadastro/categorias',
          menu: [],
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
interface Menu {
  titulo: string;
  url?: string;
  menu: Menu[];
}
