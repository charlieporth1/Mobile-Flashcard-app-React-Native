import DeckModel from "../models/DeckModel";
import {NEW_DECK, NEW_DECK_NAME, CURRENT_DECK, SELECT_DECK} from "../static/constants";

export function deckReducer(state = {decks: [], newDeckName: '', currentDeck: new DeckModel()}, action) {
    console.log(action);
    switch (action.type) {
        case NEW_DECK:
            const {id} = action.payload;
            const name = state.newDeckName;
            const decks = state.decks;
            decks.push(new DeckModel({id, name, cards: []}));
            return {decks, ...state};
        case NEW_DECK_NAME:
            const {newDeckName} = action.payload;
            return {newDeckName, ...state};
        case SELECT_DECK:
            const {deckId} = action.payload;
            return {currentDeck: state.decks[deckId], ...state};
        default:
            return state
    }

}

export function newDeck (id, name) {
    return {
        type: NEW_DECK,
        payload: {id, name}
    }
}
export function newDeckName (newDeckName) {
    return {
        type: NEW_DECK_NAME,
        payload: newDeckName
    }
}
export function selectDeck (deckId:number) {
    return {
        type: SELECT_DECK,
        payload: deckId,
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



