import {StatusBar} from 'expo-status-bar/build/StatusBar';
import SplashScreen from 'react-native-splash-screen';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigation from "./navigation/BottomTabNavigation";

const Drawer = createDrawerNavigator();
export default class App extends React.Component<> {
    constructor(props) {
        super(props);
        this.state = {
            stackNavigation: '',
            appReady: false,
        };
    }

    setStackNavigator = (stackNavigation) => {
        if (this.state.stackNavigation === '') {
            this.setState({stackNavigation});
        }
    };

    async UNSAFE_componentWillMount()  {
        SplashScreen.hide();
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
            return (<NavigationContainer>
               <BottomTabNavigation/>
            </NavigationContainer>);
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
