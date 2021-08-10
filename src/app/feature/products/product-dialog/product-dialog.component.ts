import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProductDialogComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  productForm: FormGroup = this.fb.group({
    searchBox: [null, [Validators.required, Validators.maxLength(50)]],
    width: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
    length: [null, [Validators.required, Validators.min(1), Validators.max(5)]]
  })

  ngOnInit(): void {
    if (this.data) {
      this.name?.setValue(this.data.element.name);
      this.width?.setValue(this.data.element.width);
      this.length?.setValue(this.data.element.length);
    }
  }

  onSubmit() {
    this.dialogRef.close(this.productForm.value);
  }


  get name(): AbstractControl | null {
    return this.productForm.get('name');
  }

  get width(): AbstractControl | null {
    return this.productForm.get('width');
  }

  get length(): AbstractControl | null {
    return this.productForm.get('length');
  }


}
