import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import { ProdutosComponent } from './components/views/produtos/produtos.component';
import { CriarProdutoComponent } from './components/produto/criar-produto/criar-produto.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "produtos", component: ProdutosComponent
  },
  {
    path: "produtos/criar", component: CriarProdutoComponent
  }

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
