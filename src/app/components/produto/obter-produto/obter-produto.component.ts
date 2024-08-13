import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-obter-produto',
  templateUrl: './obter-produto.component.html',
  styleUrls: ['./obter-produto.component.css']
})
export class ObterProdutoComponent implements OnInit {

  produtos: Produto[]
  displayedColumns = ['id', 'nome', 'preco', 'acoes'];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.read().subscribe(produtos => {
      this.produtos = produtos
    })
  }

}
