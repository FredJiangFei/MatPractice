import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-show',
  templateUrl: './dialog-show.component.html',
  styleUrls: ['./dialog-show.component.css']
})
export class DialogShowComponent {
  animal: string;
  constructor(
    public dialogRef: MatDialogRef<DialogShowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    save() {
      this.dialogRef.close(this.animal);
    }
}
