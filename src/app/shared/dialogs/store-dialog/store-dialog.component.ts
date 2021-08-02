import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dialog',
  templateUrl: './store-dialog.component.html',
  styleUrls: ['./store-dialog.component.css']
})
export class StoreDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<StoreDialogComponent>,
              private fb: FormBuilder) {
  }

  storeForm: FormGroup = this.fb.group({
    storeId: [{value: null, disabled: true}, [Validators.required]],
    address: [null, [Validators.required, Validators.maxLength(50)]],
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
