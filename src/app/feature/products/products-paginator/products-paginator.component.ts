import {Component, Input, Output, EventEmitter, ViewChild, AfterViewInit} from '@angular/core';
import {Product} from "../product.interface";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-products-paginator',
  templateUrl: './products-paginator.component.html',
  styleUrls: ['./products-paginator.component.css']
})
export class ProductsPaginatorComponent implements AfterViewInit {

  @Input() dataSource!: MatTableDataSource<Product>;
  @Output() paginatorEventToParent = new EventEmitter<MatPaginator>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor() {
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onPaginator(): void {
    this.paginatorEventToParent.emit(this.paginator);
  }

}
