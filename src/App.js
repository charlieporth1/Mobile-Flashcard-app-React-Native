import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import configureStore, {mapStateToProps} from "./stores/Store";
const {store, persistor} = configureStore();
let oldStateGlobal = null;
const App = () => {
    const onStateChange = (newState) => {
        if (JSON.stringify(newState) !== JSON.stringify(oldStateGlobal)) {
            oldStateGlobal = newState;
            mapStateToProps(newState);
        }
    };
    return (
        <Provider store={store}>
            {()=>store.subscribe(()=> onStateChange(store.getState()))}
            <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
                <BottomTabNavigation/>
            </NavigationContainer>
            </PersistGate>
        </Provider>);

};
export default App;