import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/produtos'
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/produtos/criar'])
  }
}
