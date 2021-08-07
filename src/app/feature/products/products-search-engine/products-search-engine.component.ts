import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-products-search-engine',
  templateUrl: './products-search-engine.component.html',
  styleUrls: ['./products-search-engine.component.css']
})
export class ProductsSearchEngineComponent implements OnInit {


  @Output() dataToParent = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
  }

  searchEngineForm: FormGroup = this.fb.group({
    name: [null, Validators.required]
  })


  ngOnInit(): void {


  }

  get name(): AbstractControl | null {
    return this.searchEngineForm.get('name');
  }

  onSearch() {
    this.dataToParent.emit(this.searchEngineForm.value);
  }
}
