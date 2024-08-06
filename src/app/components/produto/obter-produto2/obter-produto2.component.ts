import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ObterProduto2DataSource, ObterProduto2Item } from './obter-produto2-datasource';

@Component({
  selector: 'app-obter-produto2',
  templateUrl: './obter-produto2.component.html',
  styleUrls: ['./obter-produto2.component.css']
})
export class ObterProduto2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ObterProduto2Item>;
  dataSource = new ObterProduto2DataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}



// // // // // // // // // // // // EXEMPLO GERADO COM O MATERIALS
