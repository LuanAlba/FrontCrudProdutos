import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: [ './atualizar-produto.component.css' ]
})
export class AtualizarProdutoComponent implements OnInit {
  produto: Produto;

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id != null )
      this.produtoService.readById(id).subscribe((produto) => {
      this.produto = produto;
    });
  }

  updateProduto(): void {
    this.produtoService.update(this.produto).subscribe(() => {
      this.produtoService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate([ "/produtos" ]);
    });
  }

  cancel(): void {
    this.router.navigate([ "/produtos" ]);
  }

}
