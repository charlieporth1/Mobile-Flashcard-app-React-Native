import {StatusBar} from 'expo-status-bar/build/StatusBar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import {Provider} from "react-redux";
import configureStore from "./stores/Store";
const store = configureStore();
const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar/>
                <BottomTabNavigation/>
            </NavigationContainer>
        </Provider>);

};
export default App;