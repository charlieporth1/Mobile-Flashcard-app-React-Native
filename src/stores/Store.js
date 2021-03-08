import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Platform} from 'react-native';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import DefaultStorage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {persistStore, persistReducer} from 'redux-persist'
import {deckReducer} from "./DeckStore";

let middleware = [];
const storage = (Platform.OS === 'web') ? DefaultStorage : AsyncStorage;
const persistConfig = {
    reducerVersion: '2.0',
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel1,
    debug: __DEV__,
};
middleware.push(thunk);
console.log("Environment:", __DEV__);

if (__DEV__) {
    const logger = createLogger();
    middleware.push(logger);
}
const enhancer = compose(
    applyMiddleware(...middleware),
);
const rootReducer = combineReducers({
    deckStore: deckReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const configureStore = () => {
    let store = createStore(persistedReducer, undefined, enhancer);
    let persistor = persistStore(store);
    return {store, persistor}
};
export default configureStore;
export const mapStateToProps = state => {
    const {deckStore} = state;
    const {decks, currentDeck} = deckStore;
    return {deckStore, decks, currentDeck}
};