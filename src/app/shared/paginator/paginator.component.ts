import {Component, Output, EventEmitter, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements AfterViewInit {

  @Output() paginatorEventToParent = new EventEmitter<MatPaginator>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor() {
  }


  ngAfterViewInit() {
    this.paginatorEventToParent.emit(this.paginator);
  }

  onPaginator(): void {
    this.paginatorEventToParent.emit(this.paginator);
  }

}
