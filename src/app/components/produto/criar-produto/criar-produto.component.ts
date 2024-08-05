import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: [ './criar-produto.component.css' ]
})
export class CriarProdutoComponent {

  produto: Produto = {
    nome: '',
    preco: null
  }

  constructor(private produtoService: ProdutoService,
    private router: Router) { }


  salvarProduto(): void {
    this.produtoService.create(this.produto).subscribe(() => {
      this.produtoService.showMessage('Produto cadastrado!')
      this.router.navigate([ '/produtos' ])
    }) 
  }

  cancelar(): void {
    this.router.navigate([ '/produtos' ])
  }
}
