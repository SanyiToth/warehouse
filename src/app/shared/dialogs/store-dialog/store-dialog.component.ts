import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StoresService} from "../../services/stores/stores.service";
import {NotificationService} from "../../services/notification/notification.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './store-dialog.component.html',
  styleUrls: ['./store-dialog.component.css']
})
export class StoreDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StoreDialogComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private storesService: StoresService,
              private notification: NotificationService) {
  }

  storeForm: FormGroup = this.fb.group({
    storeId: [{value: null, disabled: true}, [Validators.required]],
    address: [null, [Validators.required, Validators.maxLength(50)]],
    width: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
    length: [null, [Validators.required, Validators.min(1), Validators.max(5)]]
  })


  onSubmit() {
    if (this.storeForm.valid)
      this.storesService.postStore(this.storeForm.value)
        .subscribe(resp => {
          this.notification.open('You saved successfully!');
          this.dialogRef.close()
        }, error => {
          this.notification.open('Something went wrong. Try again later!');
        })


  }

  ngOnInit(): void {
    if (!this.data) {
      this.storeForm.get('storeId')?.enable();
    }

  }


}
