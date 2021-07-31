import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-core',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `
})
export class CoreComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
