import React from "react";
import MainPage from "../pages/HomePage";
import {createStackNavigator} from "@react-navigation/stack";
import AddDeck from "../pages/AddDeck";
const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};
const Stack = createStackNavigator();
const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={MainPage} />
            <Stack.Screen name="Add Deck" component={AddDeck} />
        </Stack.Navigator>
    );
};
export {MainStackNavigator, }