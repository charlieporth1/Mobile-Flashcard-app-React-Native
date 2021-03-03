import CardModel from "./CardModel";

export default class DeckModel {
    id:number = 0;
    name:string = '';
    cards:CardModel[] = [];

    constructor(param: Partial<DeckModel>) {
        const {
            id = 0,
            name = 'Deck',
            cards = []
        } = param;
        this.id = id;
        this.name = name;
        this.cards = cards;
    }
}