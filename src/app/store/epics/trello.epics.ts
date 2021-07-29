import { Injectable } from "@angular/core";
import { ofType, StateObservable } from "redux-observable";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { DataService } from "src/app/data.service";
import { TrelloCard, TrelloList } from "src/app/model";
import { ActionType, TrelloActions } from "../actions/trello.actions";
import { IAppState } from "../reducers";

@Injectable({
    providedIn: 'root'
  })
export class TrelloEpics {
    constructor(private dataService: DataService) {}
    
    getListsEpic = (action$) => action$.pipe(
        ofType(TrelloActions.FETCH_LISTS),
        mergeMap(_ => {
            return this.dataService.getLists()
        }),
        map((result: TrelloList[]) => {
            let payload: TrelloList[] = [];
            if(result) {
                payload = result;
            }
            return ({
                type: TrelloActions.STORE_TO_LOCAL,
                payload
            })
        }),
        catchError(error => of({
            type: TrelloActions.FETCH_LISTS_ERROR
        }))
    );

    addNewListEpic = (action$, state$: StateObservable<IAppState>) => action$.pipe(
        ofType(TrelloActions.ADD_NEW_LIST),
        map((action: ActionType) => {
            const lists = state$.value.lists.slice();
            const {title} = action.payload;
            let newList: TrelloList = {
                id: Date.now(),
                title,
                items: []
            }
            const payload = [...lists, newList];

            return {
                type: TrelloActions.STORE_TO_LOCAL,
                payload
            };
        })
    )

    
    addNewCardEpic = (action$, state$: StateObservable<IAppState>) => action$.pipe(
        ofType(TrelloActions.ADD_NEW_CARD),
        map((action: ActionType) => {
            const lists = state$.value.lists.slice();
            const {listID, title, description} = action.payload;
            let list = lists.find(list => list.id === listID);

            const newItem: TrelloCard = {
                id: Math.random()*100,
                title,
                description
            }

            list.items = [...list.items, newItem ];

            return {
                type: TrelloActions.STORE_TO_LOCAL,
                payload: lists
            };
        })
    )

    removeCardEpic = (action$, state$: StateObservable<IAppState>) => action$.pipe(
        ofType(TrelloActions.REMOVE_CARD),
        map((action: ActionType) => {
            const lists = state$.value.lists.slice();
            const {listID, cardID} = action.payload;
            let list = lists.find(list => list.id === listID);

            const newItems = list.items.filter(item => item.id !== cardID);

            list.items = [...newItems];

            return {
                type: TrelloActions.STORE_TO_LOCAL,
                payload: lists
            };
        })
    )

    updateListEpic = (action$, state$: StateObservable<IAppState>) => action$.pipe(
        ofType(TrelloActions.UPDATE_LIST),
        map((action: ActionType) => {
            const lists = state$.value.lists.slice();
            const {listID, items} = action.payload;
            let list = lists.find(list => list.id === listID);

            list.items = [...items ];

            return {
                type: TrelloActions.STORE_TO_LOCAL,
                payload: lists
            };
        })
    )

    removeListEpic = (action$, state$: StateObservable<IAppState>) => action$.pipe(
        ofType(TrelloActions.REMOVE_LIST),
        map((action: ActionType) => {
            const lists = state$.value.lists.slice();
            const {listID} = action.payload;
            const payload = lists.filter(list => list.id !== listID);

            return {
                type: TrelloActions.STORE_TO_LOCAL,
                payload
            };
        })
    )

    storeToLocalEpic = (action$) => action$.pipe(
        ofType(TrelloActions.STORE_TO_LOCAL),
        mergeMap((action: ActionType) => {
            const payload = action.payload;
            return this.dataService.setListsInLocalStorage(payload)
        }),
        map((lists: TrelloList[]) => {
            const payload = lists;
            return {
                type: TrelloActions.UPDATE_LISTS,
                payload
            };
        })
    )

    
}
