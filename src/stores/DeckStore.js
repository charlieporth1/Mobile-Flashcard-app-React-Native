import DeckModel from "../models/DeckModel";
import CardModel from "../models/CardModel";
import {NEW_DECK, NEW_DECK_NAME, CURRENT_DECK, SELECT_DECK, ADD_CARD} from "../static/constants";
export const initialState = {decks: [], newDeckName: '', currentDeck:null};
export function deckReducer(state =initialState, action) {
    console.log(action);
    switch (action.type) {
        case NEW_DECK:
            const {id} = action.payload;
            const name = state.newDeckName;
            const decks = state.decks || [];
            decks.push(new DeckModel({id, name, cards: []}));
            console.log("state.decks", state.decks);
            return {decks, ...state};
        case NEW_DECK_NAME:
            const {newDeckName} = action.payload;
            return {newDeckName, ...state};
        case SELECT_DECK:
            const {deckId} = action.payload;
            const currentDeck = state.decks[deckId];
            console.log("state.decks, deckId, currentDeck", state.decks, deckId, currentDeck);
            return {currentDeck , ...state};
        case ADD_CARD:
            const {question, answer} = action.payload;
            const currentDeck1 = state.currentDeck;
            currentDeck1.cards = [...(currentDeck1.cards || []), new CardModel({question, answer})];
            console.log("currentDeck state.currentDeck state.decks", currentDeck1, state.currentDeck, state.decks);
            return {currentDeck:currentDeck1, decks: [...state.decks, currentDeck1], ...state};
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
        payload: {newDeckName}
    }
}

export function selectDeck(deckId:string) {
    return {
        type: SELECT_DECK,
        payload: {deckId},
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



