import React from 'react';
import {
    View,
    Text, StyleSheet,
} from 'react-native';
import {padding} from "../../utils/utils";
import Button from "../button/Button";
import {connect} from "react-redux";
import {mapStateToProps} from "../../stores/Store";
import {selectDeck} from "../../stores/DeckStore";
import {bindActionCreators} from "redux";

const DeckStack = ({navigation, id, cardCount, onClickAction}) => {
    const onClick = () => {
        onClickAction();
        setTimeout(()=> navigation.navigate('ViewDeck'),100);

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
const ActionCreators = Object.assign(
    {},
    {selectDeck},
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(DeckStack);
