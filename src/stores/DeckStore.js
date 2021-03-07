import DeckModel from "../models/DeckModel";
import CardModel from "../models/CardModel";
import {NEW_DECK, SELECT_DECK, ADD_CARD, REMOVE_DECK} from "../static/constants";

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
            const {deckId} = action.payload;
            const decks1 = state.decks;
            const indexOfSelectedDeck = decks1.findIndex(deck=> deck.id === deckId);
            const currentDeck = decks1[indexOfSelectedDeck];
            return {currentDeck, ...state};
        case ADD_CARD:
            const {question, answer} = action.payload;
            const currentDeck1 = state.currentDeck;
            currentDeck1.cards = [...(currentDeck1.cards || []), new CardModel({question, answer})];
            return {currentDeck: currentDeck1, decks: mergeDecks(state.decks, currentDeck1), ...state};
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

export function selectDeck(deckId: string) {
    return {
        type: SELECT_DECK,
        payload: {deckId},
    }
}

export function removeDeck(deckId: string) {
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

