import DeckModel from "../models/DeckModel";
import CardModel from "../models/CardModel";
import {NEW_DECK, NEW_DECK_NAME, CURRENT_DECK, SELECT_DECK, ADD_CARD} from "../static/constants";

export function deckReducer(state = {decks: [], newDeckName: '', currentDeck: null}, action) {
    console.log(action);
    switch (action.type) {
        case NEW_DECK:
            const {id} = action.payload;
            const name = state.newDeckName;
            const decks = state.decks;
            decks.push(new DeckModel({id, name, cards: []}));
            return {decks};
        case NEW_DECK_NAME:
            const {newDeckName} = action.payload;
            return {newDeckName};
        case SELECT_DECK:
            const {deckId} = action.payload;
            console.log("decks",decks);
            return {currentDeck: state.decks[deckId]};
        case ADD_CARD:
            const {question, answer} = action.payload;
            const currentDeck = state.currentDeck;
            console.log("currentDeck, decks", currentDeck, decks);
                currentDeck.cards = [...(currentDeck.cards || []), new CardModel({question, answer})];
            return {currentDeck};
        default:
            return state
    }

}

export function newDeck(id: number, name: string) {
    return {
        type: NEW_DECK,
        payload: {id, name}
    }
}

export function newDeckName(newDeckName: string) {
    return {
        type: NEW_DECK_NAME,
        payload: newDeckName
    }
}

export function selectDeck(deckId: number) {
    return {
        type: SELECT_DECK,
        payload: deckId,
    }
}

export function addCards(question: string, answer: string) {
    return {
        type: ADD_CARD,
        payload: {question, answer},
    }
}

// decrementCount() {
//     let { count, actions } = this.props;
//     count--;
//     actions.changeCount(count);
// }
// incrementCount() {
//     let { count, actions } = this.props;
//     count++;
//     actions.changeCount(count);
// }
// const ActionCreators = Object.assign(
//     {},
//     changeCount,
// );export const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(ActionCreators, dispatch),
// });



