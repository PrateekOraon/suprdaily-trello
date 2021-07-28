export interface TrelloCard {
    id: number;
    title: string;
    description: string;
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


// export const lists: TrelloList[] = [
//     {
//         id: 1,
//         title: "Teams",
//         items: [
//             {
//                 title: "Product",
//                 description: "3 Pending tasks to be picked by Raj."
//             },
//             {
//                 title: "Sales",
//                 description: "Send proposal to Puneet for Sales price."
//             }
//         ]
//     },
//     {
//         id: 2,
//         title: "Products",
//         items: [
//             {
//                 title: "VAT Testing",
//                 description: "Ask engg to set up testing infra."
//             }
//         ]
//     },
//     {
//         id: 3,
//         title: "Sales",
//         items: [
//             {
//                 title: "Marketing result",
//                 description: "Assign to dev."
//             },
//             {
//                 title: "Property",
//                 description: "Till 29th July EOD."
//             },
//             {
//                 title: "Historical Agreements",
//                 description: "Completed."
//             }
//         ]
//     }
// ];