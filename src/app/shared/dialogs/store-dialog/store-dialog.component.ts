import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: './store-dialog.component.html',
  styleUrls: ['./store-dialog.component.css']
})
export class StoreDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<StoreDialogComponent>) {
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
