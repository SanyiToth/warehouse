import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ProductDialogComponent>,
              private fb: FormBuilder) {
  }

  productForm: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.maxLength(50)]],
    width: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
    length: [null, [Validators.required, Validators.min(1), Validators.max(5)]]
  })

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
