import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
import DeckStack from "../components/deck/deck";
import {mapStateToProps} from "../stores/Store";
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        const { decks } = this.props;
        return (
            <View>
                {decks.length > 0 ? decks.map((deck) => {
                        return <DeckStack cardCount={deck.cards.length} deckNumber={deck.id}/>
                    }) :
                    <Text>Zero decks added</Text>
                }
            </View>
        );
    }
}


export default connect(mapStateToProps)(Home)