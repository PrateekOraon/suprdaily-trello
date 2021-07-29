import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from "../reducers";
import { AnyAction } from "redux";
import { TrelloCard } from 'src/app/model';

export interface ActionType extends AnyAction {
    type: string;
    payload: any;
}

@Injectable({
    providedIn: 'root'
  })
export class TrelloActions {
  static FETCH_LISTS = "FETCH_LISTS";
  static FETCH_LISTS_FULFILLED = "FETCH_LISTS_FULFILLED";
  static FETCH_LISTS_ERROR = "FETCH_LISTS_ERROR";
  static ADD_NEW_LIST = "ADD_NEW_LIST";
  static ADD_NEW_CARD = "ADD_NEW_CARD";
  static UPDATE_LISTS = "UPDATE_LISTS";
  static UPDATE_LIST = "UPDATE_LIST";
  static REMOVE_LIST = "REMOVE_LIST";
  static REMOVE_CARD = "REMOVE_CARD";
  static STORE_TO_LOCAL = "STORE_TO_LOCAL";

  constructor(private ngRedux: NgRedux<IAppState>) {}

  /** to fetch lists from localStorage */
  fetchLists() {
    this.ngRedux.dispatch({
      type: TrelloActions.FETCH_LISTS,
    });
  };

  /** to add new list on clicking add list button */
  addNewList(title: string) {
    this.ngRedux.dispatch({
      type: TrelloActions.ADD_NEW_LIST,
      payload: {
        title
      }
    })
  }

  /** to add new card in a list on clicking add button */
  addNewCardToList(listID: number, title: string, description: string) {
    this.ngRedux.dispatch({
      type: TrelloActions.ADD_NEW_CARD,
      payload: {
        listID,
        title,
        description
      }
    })
  }

  /** to remove a card from a list on clicking close button */
  removeCardFromList(listID: number, cardID: number) {
    this.ngRedux.dispatch({
      type: TrelloActions.REMOVE_CARD,
      payload: {
        listID,
        cardID
      }
    });
  }

  /** to update a list in general */
  updateList(listID: number, items: TrelloCard[]) {
    this.ngRedux.dispatch({
      type: TrelloActions.UPDATE_LIST,
      payload: {
        listID,
        items
      }
    })
  }

  /** to remove a list on clicking close button */
  removeList(listID: number) {
    this.ngRedux.dispatch({
      type: TrelloActions.REMOVE_LIST,
      payload: {
        listID
      }
    })
  }


}