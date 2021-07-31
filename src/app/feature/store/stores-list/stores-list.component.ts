import {Component, Input, OnInit} from '@angular/core';
import {Store} from "../store.interface";

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.css']
})
export class StoresListComponent implements OnInit {

  @Input() stores!: Store[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
