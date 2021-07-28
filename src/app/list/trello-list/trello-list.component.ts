import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TrelloCardDialogComponent } from 'src/app/card/trello-card-dialog/trello-card-dialog.component';
import { TrelloCard, TrelloList } from 'src/app/model';
import { TrelloActions } from 'src/app/store/actions/trello.actions';

@Component({
  selector: 'app-trello-list',
  templateUrl: './trello-list.component.html',
  styleUrls: ['./trello-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrelloListComponent implements OnInit {
  @Input()
  list!: TrelloList;

  newCardTitle: string = "";
  newCardDescription: string = "";

  constructor(public dialog: MatDialog, private trelloActions: TrelloActions) { }

  ngOnInit(): void {
  }

  // ngDoCheck() {
  //   console.log(this.list.id);
  // }

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
      // console.log('The card dialog was closed', result? result: "empty");
      // this.newListTitle = result;
    });

  }

  removeList() {
    let shouldClose = confirm("Do you want to remove this list?")
    if(shouldClose) {
      this.trelloActions.removeList(this.list.id);
    }
  }

}
