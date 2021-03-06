import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AddDeckStack, MainStackNavigator} from "./AppNavigation";
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={MainStackNavigator} />
            <Tab.Screen name="Add Deck" component={AddDeckStack} />
        </Tab.Navigator>
    );
};
export default BottomTabNavigation;