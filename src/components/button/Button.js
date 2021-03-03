import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {padding} from "../../utils/utils";


const Button = ({style, onPress = ()=> {}, ...props}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[(!style ? styles.button : style)]}
        >
            <View style={[(!style ? styles.button : style)]}>{props.children}</View>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        ...padding(10, 7, 0, 0),
        backgroundColor: '#0FAFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop:25
    },
});
