export interface TrelloCard {
    title: string;
    description: string;
}

export interface TrelloList {
    title: string;
    items: TrelloCard[];
}


export const lists: TrelloList[] = [
    {
        title: "Teams",
        items: [
            {
                title: "Product",
                description: "3 Pending tasks to be picked by Raj."
            },
            {
                title: "Sales",
                description: "Send proposal to Puneet for Sales price."
            }
        ]
    },
    {
        title: "Products",
        items: [
            {
                title: "VAT Testing",
                description: "Ask engg to set up testing infra."
            }
        ]
    }
];