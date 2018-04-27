import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {Text, View} from 'react-native';
import {ButtonGroup, Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import {insertWord} from '../actions/word_actions';
import {fetchData} from '../actions/index'
import Styles from '../styleSheet';

class AddAWord extends Component {

    constructor(props) {
        super(props);
        this.state = {germanWord: "", englishTrans: "", selectedIndex: 0, buttons: ['Das', 'Die', 'Der']};
        this.onSendingForm = this.onSendingForm.bind(this);
        this.updateIndex = this.updateIndex.bind(this);

    }
    componentDidUpdate() {
        if (this.props.answer ==="Succeed")
            this.props.fetchData();

    }

    onSendingForm() {
        const state = this.state;
        const {germanWord, englishTrans} = state;
        const gender = state.buttons[state.selectedIndex];
        console.log("state:");
        console.log(state);
        this.props.insertWord(germanWord, englishTrans, gender);

    }

    updateIndex(selectedIndex) {
        this.setState({selectedIndex})
    }

    render() {

        const {selectedIndex, buttons} = this.state;
        return (
            <View>
                <Text style={[style.h1, Styles.centerTxt]}>Add A Word</Text>
                <View style={Styles.vocabularyContainer}>
                    <FormLabel>German Word</FormLabel>
                    <FormInput onChangeText={(text) => this.setState({germanWord: text})}/>

                    <FormLabel>English Translation</FormLabel>
                    <FormInput onChangeText={(text) => this.setState({englishTrans: text})}/>

                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}/>
                </View>
                <Button
                    raised
                    icon={{name: 'add'}}
                    backgroundColor='#1D3767'
                    title='Add'
                    onPress={this.onSendingForm}
                />
                <FormValidationMessage>{this.props.errorAnswer}</FormValidationMessage>
                <Text style = {Styles.centerTxt} >{this.props.answer}</Text>

            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        insertWord: bindActionCreators(insertWord, dispatch),
        fetchData: bindActionCreators(fetchData,dispatch)
    }
};

const mapStateToProps = state => {
    console.log(state.answer);

    return {
        answer: state.answer.answer,
        loadingAnswer: state.answer.loading,
        errorAnswer: state.answer.error,
        items: state.data.items,
        loading: state.data.loading,
        error: state.data.error
    };
    //return the data in state (reducer). vocabulary as a prop under the key vocabulary

};

export default connect(mapStateToProps, mapDispatchToProps)(AddAWord);


const style = {
    h1: {
        fontSize: 20,
        padding: 10
    }
};
