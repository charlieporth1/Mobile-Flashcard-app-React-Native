import {createStore, combineReducers} from 'redux';
import {deckReducer} from "./DeckStore";

const rootReducer = combineReducers({
    deckStore: deckReducer,
});
const configureStore = () => {
    return createStore(rootReducer);
};
export default configureStore;
export const mapStateToProps = (state) => {
    const {deckStore} = state;
    const {decks, newDeckName} = deckStore;
    return {deckStore, decks, newDeckName}
};