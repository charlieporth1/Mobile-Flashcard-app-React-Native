import DeckModel from "../models/DeckModel";
import CardModel from "../models/CardModel";
import {NEW_DECK, SELECT_DECK, ADD_CARD, REMOVE_DECK} from "../static/constants";
import {arrayRemove} from "../utils/utils";

const initialState = {decks: [], currentDeck: null};

export function deckReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case NEW_DECK:
            const {name} = action.payload;
            const decks = state.decks;
            const id = pushId(decks);
            decks.push(new DeckModel({id, name}));
            return {decks, ...state};
        case SELECT_DECK:
            const decks1 = state.decks;
            const {deckId} = action.payload;
            const indexOfSelectedDeck = decks1.findIndex(deck => deck.id === deckId);
            console.log("indexOfSelectedDeck", indexOfSelectedDeck)
            const cd = decks1[indexOfSelectedDeck];
            console.log("cd", cd)
            return {currentDeck: cd, ...state};

        case ADD_CARD:
            const {question, answer} = action.payload;
            const currentDeck1 = state.currentDeck;
            currentDeck1.cards = [...(currentDeck1.cards || []), new CardModel({question, answer})];
            return {currentDeck: currentDeck1, decks: mergeDecks(state.decks, currentDeck1), ...state};
        case REMOVE_DECK:
            const indexOfSelectedDeck2 = state.decks.findIndex(deck => deck.id === action.payload.deckId);
            const currentDeck2 = state.decks[indexOfSelectedDeck2];
            console.log("state.currentDeck currentDeck2 ,action.payload", state.currentDeck, currentDeck2, action.payload)
            const deletedDeckArray = arrayRemove(state.decks, state.currentDeck);
            return {decks: deletedDeckArray, currentDeck: null, ...state};
        default:
            return state
    }

}

const pushId = (decks) => {
    const id = (decks || {id: -1}).id + 1 || 0;
    return id;
};
const mergeDecks = (deckArray: [], newDeck) => {
    const newDeckArray = deckArray.filter((deck) => deck.id !== newDeck.id);
    newDeckArray.push(newDeck);
    return newDeckArray;
};

export function newDeck(name: string) {
    return {
        type: NEW_DECK,
        payload: {name},
    }
}

export function selectDeck(deckId: number) {
    return {
        type: SELECT_DECK,
        payload: {deckId},
    }
}

export function removeDeck(deckId: number) {
    return {
        type: REMOVE_DECK,
        payload: {deckId},
    }
}

export function addCards(question: string, answer: string) {
    return {
        type: ADD_CARD,
        payload: {question, answer},
    }
}

