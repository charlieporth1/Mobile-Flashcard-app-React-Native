import React, {Component} from "react";
import {
    View,
    Text,
} from 'react-native';
import TextWithInput from "../components/input/TextWithInput";
import {addCards} from "../stores/DeckStore";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {mapStateToProps} from "../stores/Store";
import Button from "../components/button/Button";

class AddCards extends Component {
    state = {
        answer: '',
        question: ''
    };
    onAnswer = (answer) => {
        this.setState({answer});
    };
    onQuestion = (question) => {
        this.setState({question});
    };
    onSubmit = () => {
        const {actions, navigation} = this.props;
        const {answer, question} = this.state;
        actions.addCards(question,answer);
        navigation.navigate('ViewDeck')

    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {answer, question} = this.state;
        return <View>
            <TextWithInput placeholder='Question' onChange={(text) => this.onQuestion(text)} value={answer}/>
            <TextWithInput placeholder='Answer' onChange={(text) => this.onAnswer(text)} value={question}/>
            <Button onPress={this.onSubmit}><Text>Add Card</Text></Button>
        </View>;
    }

}
const ActionCreators = Object.assign(
    {},
    {addCards},
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCards)