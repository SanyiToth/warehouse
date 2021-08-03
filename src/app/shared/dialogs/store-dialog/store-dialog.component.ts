import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dialog',
  templateUrl: './store-dialog.component.html',
  styleUrls: ['./store-dialog.component.css']
})
export class StoreDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StoreDialogComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  storeForm: FormGroup = this.fb.group({
    storeId: [{value: null, disabled: true}, [Validators.required]],
    address: [null, [Validators.required, Validators.maxLength(50)]],
    width: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
    length: [null, [Validators.required, Validators.min(1), Validators.max(5)]]
  })


  ngOnInit(): void {
    if (this.data) {
      this.storeId?.setValue(this.data.element.storeId);
      this.address?.setValue(this.data.element.address);
      this.width?.setValue(this.data.element.width);
      this.length?.setValue(this.data.element.length);
    }
  }


  get storeId(): AbstractControl | null {
    return this.storeForm.get('storeId');
  }

  get address(): AbstractControl | null {
    return this.storeForm.get('address');
  }

  get width(): AbstractControl | null {
    return this.storeForm.get('width');
  }

  get length(): AbstractControl | null {
    return this.storeForm.get('length');
  }

}
