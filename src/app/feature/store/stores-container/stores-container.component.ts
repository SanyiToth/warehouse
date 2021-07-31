import { Component, OnInit } from '@angular/core';
import {StoresService} from "../../../shared/services/store/stores.service";

@Component({
  selector: 'app-store-container',
  templateUrl: './stores-container.component.html',
  styleUrls: ['./stores-container.component.css']
})
export class StoresContainerComponent implements OnInit {

  constructor(private storeService:StoresService) { }

  ngOnInit(): void {
  }

}
