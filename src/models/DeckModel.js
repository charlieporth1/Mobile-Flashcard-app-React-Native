import CardModel from "./CardModel";

export default class DeckModel {
    deckNumber:number = 0;
    deckName:string = '';
    cards:CardModel[] = [];

    constructor(param: Partial<DeckModel>) {
        const {
            deckNumber = 0,
            deckName = 'Deck',
            cards = []
        } = param;
        this.deckNumber = deckNumber;
        this.deckName = deckName;
        this.cards = cards;
    }
}