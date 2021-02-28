import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from "./src/components/navbar/navbar";
const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen
            name="MainPage"
            options={{
            }}
        >
          {(props) => (
              <MainPage
                  {...props}
              />
          )}
        </Stack.Screen>
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
