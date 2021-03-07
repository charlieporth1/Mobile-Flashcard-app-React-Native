import React, {Component} from 'react';
import {
    View,
    Text,
    Alert
} from 'react-native';
import Button from "../components/button/Button";
import {connect} from "react-redux";
import {mapStateToProps} from "../stores/Store";
import {removeDeck} from "../stores/DeckStore";
import {bindActionCreators} from "redux";

class ViewDeck extends Component {
    deleteDeck = () => {
        const {currentDeck, actions, navigation} = this.props;
        actions.removeDeck(currentDeck.id);
        Alert.alert("Successfully deleted deck");
        navigation.navigate('Home');
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {navigation} = this.props;
        return (<View>
            <Button onPress={() => navigation.navigate('AddCards')}><Text>Add Card</Text></Button>
            <Button onPress={() => navigation.navigate('ViewQuestionPage')}><Text>Start Quiz</Text></Button>
            <Button onPress={this.deleteDeck}><Text>Delete Deck</Text></Button>
        </View>);
    }
}

const ActionCreators = Object.assign(
    {},
    {removeDeck},
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewDeck)