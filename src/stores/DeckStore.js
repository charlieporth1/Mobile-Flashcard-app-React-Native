import DeckModel from "../models/DeckModel";
import CardModel from "../models/CardModel";
import {NEW_DECK, SELECT_DECK, ADD_CARD, REMOVE_DECK, NO_DECK} from "../static/constants";
import {arrayRemove} from "../utils/utils";
import '../utils/prototypes';

const initialState = {decks: [], currentDeck: null, currentDeckId: 0};

export function deckReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case NEW_DECK:
            const {name} = action.payload;
            const decks = state.decks || [];
            const id = pushId(decks);
            decks.push(new DeckModel({id, name}));
            return {decks, ...state};
        case SELECT_DECK:
            const decks1 = state.decks;
            const {deckId} = action.payload;
            // if (parseInt(deckId) !== NO_DECK) {
                const indexOfSelectedDeck = decks1.findIndex(deck => deck.id === deckId);
                const currentDeck = decks1[indexOfSelectedDeck];
                console.debug("Selecting currentDeck.id ", currentDeck.id);
                return {currentDeck, currentDeckId: deckId, ...state};
            // } else {
            //     console.debug("Setting currentDeck to null as deselecting deck has started");
            //     return {currentDeck: null, currentDeckId: deckId, ...state};
            // }
        case ADD_CARD:
            const {question, answer} = action.payload;
            console.log("state.currentDeck", state.currentDeck)
            const currentDeck1 = state.currentDeck;
            const currentCards = (currentDeck1 || {cards: []}).cards || [];
            currentDeck1.cards = [...currentCards, new CardModel({question, answer})];
            return {currentDeck: currentDeck1, decks: mergeDecks(state.decks, currentDeck1), ...state};
        case REMOVE_DECK:
            const indexOfSelectedDeck2 = state.decks.findIndex(deck => deck.id === action.payload.deckId);
            const currentDeck2 = state.decks[indexOfSelectedDeck2];
            const deletedDeckArray = arrayRemove(state.decks, currentDeck2);
            return {decks: deletedDeckArray, currentDeck: null, ...state};
        default:
            return state
    }

}

const pushId = (decks: []) => {
    if (decks) {
        const id = (decks.last(true) || new DeckModel({})).id + 1 || 1;
        return id;
    }
    return 1;
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

