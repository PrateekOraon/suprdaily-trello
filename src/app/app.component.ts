import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { TrelloCard, TrelloList } from './model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TrelloListDialogComponent } from './list/trello-list-dialog/trello-list-dialog.component';
import { select } from '@angular-redux/store';
import { getListsSelector } from './store/selectors/trello.selector';
import { Observable } from 'rxjs';
import { TrelloActions } from './store/actions/trello.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @select(getListsSelector)
  boardLists$: Observable<TrelloList[]>;
  boardLists: TrelloList[];
  
  newListTitle: string = "";

  constructor(public dialog: MatDialog, private trelloActions: TrelloActions) {}

  ngOnInit() {
    this.trelloActions.fetchLists();
    this.boardLists$.subscribe(lists => {
      this.boardLists = lists;
    })
  }

  drop(event: CdkDragDrop<TrelloList>, list: TrelloList) {
    // console.log(list)
    if(event.previousContainer !== event.container) {
      const {id: pID, items: pItems} = event.previousContainer.data;
      const {id: cID, items: cItems} = event.container.data;

      transferArrayItem(pItems, cItems, event.previousIndex, event.currentIndex);

      this.trelloActions.updateList(pID, pItems);
      this.trelloActions.updateList(cID, cItems);
      console.log("From: ", event.previousContainer.data);
      console.log("To: ", event.container.data);
    } else {
      // moveItemInArray(list.items, event.previousIndex, event.currentIndex);
    }
    // console.log(this.boardLists);
  }

  addNewList() {
    const dialogRef = this.dialog.open(TrelloListDialogComponent, {
      width: '350px',
      data: {title: this.newListTitle}
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      // dispatch action if result is not undefined
      if(result) {
        this.newListTitle = result;
        this.trelloActions.addNewList(this.newListTitle);
        this.newListTitle = "";
      }
    });
  }

  removeCard(list: TrelloList, item: TrelloCard) {
    this.trelloActions.removeCardFromList(list.id, item.id)
  }
}
