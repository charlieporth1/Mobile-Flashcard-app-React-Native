import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';


const Button = ({style, ...props}) => {
    return (
        <TouchableOpacity
            {...props}
            style={[!style ? styles : style]}
        >
            <View style={}>{props.children}</View>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
    },
});
