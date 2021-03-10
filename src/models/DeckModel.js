import CardModel from "./CardModel";

export default class DeckModel {
    id:number = 0 || 0;
    name:string = '';
    cards:CardModel[] = [];

    constructor(param: Partial<DeckModel>) {
        const {
            id = 0,
            name = 'Deck',
            cards = []
        } = param;
        this.id = parseInt(id) || 0; //Bug where int was a str for some reason
        this.name = name ;
        this.cards = cards;
    }
}