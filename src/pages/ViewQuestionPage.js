import React, {Component} from "react";
import {
    View,
    Text,
} from 'react-native';
import {connect} from "react-redux";
import {mapStateToProps} from "../stores/Store";
import Button from "../components/button/Button";
import {randomNumber} from "../utils/utils";

class ViewQuestionPage extends Component {
    state = {
        isViewAnswer: false
    };
    toggleViewAnswer = () => {
        this.setState({isViewAnswer: !this.state.isViewAnswer})
    };

    render() {
        const {currentDeck} = this.props;
        const {isViewAnswer} = this.state;
        const cards = currentDeck.cards || [];
        if (cards.length > 0) {
            const index  = randomNumber(0, cards.length - 1);
            const currentCard = cards[index];
            return <View>
                <Text>{currentCard.question}</Text>
                <Button onPress={this.toggleViewAnswer}><Text>Click to view Answer</Text></Button>
                {isViewAnswer ? <Text>{currentCard.answer}</Text> : undefined}
            </View>;
        } else {
            return <View><Text>This deck has {cards.length} cards in it</Text></View>
        }
    }
}

export default connect(mapStateToProps)(ViewQuestionPage)