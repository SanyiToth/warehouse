import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;
  duration: number;
  panelClass: string[];

  constructor(private snackBar: MatSnackBar) {
    this.horizontalPosition = 'right';
    this.verticalPosition = 'top';
    this.duration = 5000;
    this.panelClass = ['mat-toolbar', 'mat-primary'];
  }

  open(message: string, fileName: string = '') {
    if (fileName) message = `${message} ${fileName}`;
    return this.snackBar.open(message, 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.duration,
      panelClass: this.panelClass
    });
  }
}

