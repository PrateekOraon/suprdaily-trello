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


export interface ListDialogData {
    title: string;
  }

  export interface CardDialogData {
    title: string;
    description: string;
  }
