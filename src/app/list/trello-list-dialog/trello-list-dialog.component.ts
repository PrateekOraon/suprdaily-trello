import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListDialogData } from 'src/app/model';

@Component({
  selector: 'app-trello-list-dialog',
  templateUrl: './trello-list-dialog.component.html',
  styleUrls: ['./trello-list-dialog.component.scss']
})
export class TrelloListDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TrelloListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ListDialogData) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
