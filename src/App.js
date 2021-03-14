import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import './utils/prototypes';
import configureStore from "./stores/Store";
const {store, persistor} = configureStore();
// persistor.purge();
// let globalState = null;
// store.subscribe(()=> {
//     if (globalState !== store.getState()) {
//         globalState = store.getState();
//         persistor.persist()
//     }
// });

const App = () => {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
                <BottomTabNavigation/>
            </NavigationContainer>
            </PersistGate>
        </Provider>);

};
export default App;