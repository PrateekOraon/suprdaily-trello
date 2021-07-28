import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { lists, TrelloCard, TrelloList } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  boardLists: TrelloList[] = lists;

  drop(event: CdkDragDrop<TrelloCard[]>) {
    moveItemInArray(this.boardLists[0].items, event.previousIndex, event.currentIndex);
    console.log(this.boardLists[0]);
  }
}
