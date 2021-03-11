import React from "react";
import App from './src/App';
import {AppRegistry, Platform} from 'react-native';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately

AppRegistry.registerComponent('main', () => App);
if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById('main');
    AppRegistry.runApplication('main', {rootTag});
}