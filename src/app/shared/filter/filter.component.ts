import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {


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
