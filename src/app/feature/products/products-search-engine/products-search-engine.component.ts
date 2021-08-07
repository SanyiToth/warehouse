import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-products-search-engine',
  templateUrl: './products-search-engine.component.html',
  styleUrls: ['./products-search-engine.component.css']
})
export class ProductsSearchEngineComponent  {


  @Output() dataToParent = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
  }

  searchEngineForm: FormGroup = this.fb.group({
    name: [null]
  })


  get name(): AbstractControl | null {
    return this.searchEngineForm.get('name');
  }

  onSearch() {
    this.dataToParent.emit(this.name?.value);
  }
}
