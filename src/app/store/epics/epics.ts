import { Injectable } from '@angular/core';
import { combineEpics, Epic } from 'redux-observable';
import { TrelloEpics } from './trello.epics';

@Injectable({
    providedIn: 'root'
  })
export class RootEpic {
    epics: Epic<any>;

    constructor(private trelloEpics: TrelloEpics) {
        this.epics = combineEpics(
            this.trelloEpics.getListsEpic,
            this.trelloEpics.addNewListEpic,
            this.trelloEpics.addNewCardEpic,
            this.trelloEpics.updateListEpic,
            this.trelloEpics.removeListEpic,
            this.trelloEpics.removeCardEpic,
            this.trelloEpics.storeToLocalEpic
        )
    }
}
