import React from "react";
import { AppRegistry, Platform } from 'react-native';
import App from './src/App';
import {registerRootComponent} from "expo";

import * as app from './app.json';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
// AppRegistry.registerComponent('main', () => App);


AppRegistry.registerComponent(app.name, () => App);

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById('main');
    AppRegistry.runApplication(app.name, { rootTag });
}
