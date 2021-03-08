import React, {Component} from 'react';
import {
    View,
    Text,
    Alert
} from 'react-native';
import Button from "../components/button/Button";
import {connect} from "react-redux";
import {mapStateToProps} from "../stores/Store";
import {removeDeck, selectDeck} from "../stores/DeckStore";
import {bindActionCreators} from "redux";

class ViewDeck extends Component {
    componentWillUnmount(): void {
        const {actions} = this.props;
        actions.selectDeck(null);
    }

    deleteDeck = () => {
        const {currentDeck, actions, navigation} = this.props;
        const id = currentDeck.id;
        console.log("id", id);
        actions.removeDeck(id);
        Alert.alert("Successfully deleted deck");
        navigation.navigate('Home');
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {navigation} = this.props;
        return (<View>
            <Button onPress={() => navigation.navigate('AddCards')}>
                <Text>Add Card</Text>
            </Button>
            <Button onPress={() => navigation.navigate('ViewQuestionPage')}>
                <Text>Start Quiz</Text>
            </Button>
            <Button onPress={this.deleteDeck}>
                <Text>Delete Deck</Text>
            </Button>
        </View>);
    }
}

const ActionCreators = Object.assign(
    {},
    {removeDeck, selectDeck},
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewDeck)