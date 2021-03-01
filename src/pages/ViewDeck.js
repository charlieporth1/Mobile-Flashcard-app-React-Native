import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import NavBar from "../components/navbar/navbar";
import DeckStack from "../components/deck/deck";
import PropTypes from 'prop-types';
import Button from "../components/button/Button";

class ViewDeck extends React.Component {
    static propTypes = {
        deck: PropTypes.object.isRequired
    };
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
       const {deck} = this.props;
        return (<View>
            <DeckStack cardCount={deck.cards.length} deckNumber={deck.deckNumber}/>
            <Button><Text>Add Card</Text></Button>
            <Button><Text>Start Quiz</Text></Button>
            <Button><Text>Delete Deck</Text></Button>
            <NavBar/>
        </View>);
    }
}
export default ViewDeck;