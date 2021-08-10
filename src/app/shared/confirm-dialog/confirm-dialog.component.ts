import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public confirmMessage!: string;

  ngOnInit(): void {
    this.data.element.name ?
      this.confirmMessage = `Are you sure you want to delete '${this.data.element.name}'?` :
      this.confirmMessage = `Are you sure you want to delete '${this.data.element.id}'?`
  }

}
