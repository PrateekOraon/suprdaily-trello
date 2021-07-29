export interface TrelloCard {
    id: number;
    title: string;
    description: string;
    created_at: number;
}

export interface TrelloList {
    id: number;
    title: string;
    items: TrelloCard[];
}

/** dialog box data for adding new list */
export interface ListDialogData {
    title: string;
  }

/** dialog box data for adding new card */  
export interface CardDialogData {
  title: string;
  description: string;
}
