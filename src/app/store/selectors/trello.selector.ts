import { createSelector } from "reselect";
import { IAppState } from "../reducers";

const listsState = (state: IAppState) => state.lists;

export const getListsSelector = createSelector(
    [listsState],
    lists => lists
)

