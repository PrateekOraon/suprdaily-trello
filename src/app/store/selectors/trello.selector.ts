import { createSelector } from "reselect";
import { IAppState } from "../reducers";

const listsState = (state: IAppState) => state.lists;

export const getListsSelector = createSelector(
    [listsState],
    lists => lists
)

// export const getFavorites = createSelector(
//     [getCustomers],
//     customers => customers.filter(customer => customer.isFavorite)
// )

