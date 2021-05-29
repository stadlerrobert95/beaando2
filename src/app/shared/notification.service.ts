import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  success(msg: string){
      this.snackBar.open(msg, '');
  }

  warn(msg: string){
    this.snackBar.open(msg, '');
}
}
