import React from 'react';
import {
    View,
    Text, StyleSheet,
} from 'react-native';
import {padding} from "../../utils/utils";
import Button from "../button/Button";
import {connect} from "react-redux";
import {mapStateToProps} from "../../stores/Store";

const DeckStack = ({navigation, deck, onClickAction}) => {
    const onClick = () => {
        onClickAction();
        setTimeout(()=> navigation.navigate('ViewDeck'),100);

    };
    const name = deck.name || '';
    const id = deck.id || '';
    const cards = (deck || {cards: []}).cards || [];
    const cardCount = cards.length || 0;
    return (
        <Button onPress={onClick} style={{...styles.containerView}}>
            <View style={{...styles.maxWidth, ...styles.block, backgroundColor: 'blue'}}>
                <Text stlye={{color: '#FFF'}}>{name}: Deck #{id}</Text>
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
        marginTop: 15,
        backgroundColor: '#3f4fb9',
        borderRadius: 5,
        ...padding(10, 7, 0, 0),

    },
});
export default connect(mapStateToProps)(DeckStack);
