import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist'
import {deckReducer} from "./DeckStore";
let middleware = [];
const persistConfig = {
    reducerVersion: '2.0',
    key: 'root',
    storage: AsyncStorage,
};
middleware.push(thunk);

console.log("Environment:", __DEV__);

if (__DEV__) {
    const logger = createLogger();
    middleware.push(logger);
}
const enhancer = compose(
    applyMiddleware(...middleware),
    //  autoRehydrate()
);
const rootReducer = combineReducers({
    deckStore: persistReducer(persistConfig, deckReducer),
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const configureStore = () => {
    let store = createStore(persistedReducer, undefined, enhancer);
    let persistor = persistStore(store);
    return { store, persistor }
};
export default configureStore;
export const mapStateToProps = (state) => {
    const {deckStore} = state;
    const {decks, newDeckName, currentDeck} = deckStore;
    return {deckStore, decks, newDeckName, currentDeck}
};