import { ActionType, TrelloActions } from "../actions/trello.actions";

export const trelloReducer = (state = [], action: ActionType) => {
    const payload = action.payload;
    switch (action.type) {
      case TrelloActions.FETCH_LISTS_FULFILLED:
      case TrelloActions.UPDATE_LISTS:
        return [
          ...payload
        ];
      default:
        return state;
    }
  };