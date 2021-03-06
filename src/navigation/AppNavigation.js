import React from "react";
import MainPage from "../pages/HomePage";
import {createStackNavigator} from "@react-navigation/stack";
import AddDeck from "../pages/AddDeck";
import ViewDeck from "../pages/ViewDeck";
import AddCards from "../pages/AddCards";
import ViewQuestionPage from "../pages/ViewQuestionPage";

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
            <Stack.Screen name="Home" component={MainPage}/>
            <Stack.Screen name="ViewDeck" component={ViewDeck}/>
            <Stack.Screen name="AddCards" component={AddCards}/>
            <Stack.Screen name="ViewQuestionPage" component={ViewQuestionPage}/>
        </Stack.Navigator>
    );
};
const AddDeckStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Add Deck" component={AddDeck}/>
        </Stack.Navigator>
    );
};
export {MainStackNavigator, AddDeckStack}