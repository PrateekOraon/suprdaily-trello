import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardDialogData } from 'src/app/model';

@Component({
  selector: 'app-trello-card-dialog',
  templateUrl: './trello-card-dialog.component.html',
  styleUrls: ['./trello-card-dialog.component.scss']
})
export class TrelloCardDialogComponent{

  constructor(
    public dialogRef: MatDialogRef<TrelloCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CardDialogData) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
