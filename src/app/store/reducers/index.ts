import { combineReducers } from "redux";
import { TrelloList } from "src/app/model";
import { trelloReducer } from "./trello.reducer";

export interface IAppState {
    lists: TrelloList[];
}

export const INITIAL_STATE: IAppState = {
    lists: [],
}

export const rootReducer = combineReducers({
    lists: trelloReducer
  });