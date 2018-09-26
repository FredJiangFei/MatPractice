import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogShowComponent } from '../dialog-show/dialog-show.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  name: string;
  animal: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogShowComponent, {
      width: '250px',
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }
}
