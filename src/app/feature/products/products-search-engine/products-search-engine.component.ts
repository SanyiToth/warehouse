import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-products-search-engine',
  templateUrl: './products-search-engine.component.html',
  styleUrls: ['./products-search-engine.component.css']
})
export class ProductsSearchEngineComponent  {


  @Output() filterValue = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
  }

  searchEngineForm: FormGroup = this.fb.group({
    searchBox: [null]
  })


  get searchBox(): AbstractControl | null {
    return this.searchEngineForm.get('searchBox');
  }

  onSearch() {
    this.filterValue.emit(this.searchBox?.value);
  }
}
