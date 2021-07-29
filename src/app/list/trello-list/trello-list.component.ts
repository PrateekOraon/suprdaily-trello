import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TrelloCardDialogComponent } from 'src/app/card/trello-card-dialog/trello-card-dialog.component';
import { TrelloCard, TrelloList } from 'src/app/model';
import { TrelloActions } from 'src/app/store/actions/trello.actions';

@Component({
  selector: 'app-trello-list',
  templateUrl: './trello-list.component.html',
  styleUrls: ['./trello-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush /** to not call change detection when list in not changed */
})
export class TrelloListComponent {
  @Input()
  list!: TrelloList;

  newCardTitle: string = "";
  newCardDescription: string = "";

  constructor(public dialog: MatDialog, private trelloActions: TrelloActions) { }

  addNewCard() {
    const dialogRef = this.dialog.open(TrelloCardDialogComponent, {
      width: '350px',
      data: {title: this.newCardTitle, description: this.newCardDescription}
    });

    dialogRef.afterClosed().subscribe((result: TrelloCard) => {
      // dispatch action if result is not undefined
      if(result?.title && result?.description) {
        this.newCardTitle = result.title;
        this.newCardDescription = result.description;
        this.trelloActions.addNewCardToList(this.list.id, this.newCardTitle, this.newCardDescription)
        this.newCardTitle = "";
        this.newCardDescription = "";
      }
    });

  }

  removeList() {
    let shouldClose = confirm("All the cards in this list will be deleted. Continue?")
    if(shouldClose) {
      this.trelloActions.removeList(this.list.id);
    }
  }

}
