import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MainStackNavigator} from "./AppNavigation";
const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={MainStackNavigator} />
        </Tab.Navigator>
    );
};
export default BottomTabNavigation;