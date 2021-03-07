import React, {Component} from "react";
import {
    View,
    Text,
} from 'react-native';
import {connect} from "react-redux";
import {mapStateToProps} from "../stores/Store";
import Button from "../components/button/Button";

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
        console.log("currentDeck", currentDeck);
        const currentCard = (currentDeck.cards || []).pop();
        console.log("currentCard", currentCard);
        return <View>
            <Text>{currentCard.question}</Text>
            <Button onPress={this.toggleViewAnswer}><Text>Click to view Answer</Text></Button>
            {isViewAnswer ? <Text>{currentCard.answer}</Text> : undefined}
        </View>;
    }
}

export default connect(mapStateToProps)(ViewQuestionPage)