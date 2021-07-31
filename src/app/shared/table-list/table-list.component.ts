import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  @Input() data!: any;
  displayedColumns!: string[];

  constructor() {
  }

  ngOnInit(): void {
    this.displayedColumns = Object.keys(this.data[0]);
    console.log('data', this.displayedColumns);
  }

}
