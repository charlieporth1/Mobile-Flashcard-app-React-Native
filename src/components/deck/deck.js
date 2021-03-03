import React from 'react';
import {
    View,
    Text, StyleSheet,
} from 'react-native';
import {padding} from "../../utils/utils";
import Button from "../button/Button";

const DeckStack = ({navigation, id, cardCount, actions}) => {
    const onClick = () => {
        actions.selectDeck(id);
        setTimeout(() => navigation.push('ViewDeck'), 100)
    };

    return (
        <Button onPress={onClick} style={{...styles.containerView}}>
            <View style={{...styles.maxWidth, ...styles.block, backgroundColor: 'blue'}}>
                <Text stlye={{color: '#FFF'}}>Deck {id}</Text>
            </View>
            <View style={{...styles.maxWidth, ...styles.block, backgroundColor: 'white'}}>
                <Text>{cardCount} Cards</Text>
            </View>
        </Button>
    );
};
const styles = StyleSheet.create({
    block: {
        ...padding(10, 7, 0, 0),
        borderRadius: 5,
        borderColor: 'blue',
        borderWidth: 2,
        width: '100%',
        marginTop: 5

    },
    containerView: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: '85%',
        marginTop: 25,
    },
    placeholderFont: {
        color: 'gray',
        fontSize: 15,
        opacity: 1.0,
    },
});

export default DeckStack;
