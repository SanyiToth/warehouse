import {Component, Input, Output, EventEmitter, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements AfterViewInit {

  @Input() dataSource!: MatTableDataSource<any>;
  @Output() paginatorEventToParent = new EventEmitter<MatPaginator>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor() {
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginatorEventToParent.emit(this.paginator);
  }

  onPaginator(): void {
    this.paginatorEventToParent.emit(this.paginator);
  }

}
