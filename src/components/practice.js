import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ButtonGroup, Icon, Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import {connect} from 'react-redux';


import Styles from '../styleSheet';
import * as actions from '../actions/index';


class Practice extends Component {
    constructor(props) {
        super(props);
        const questions = this.props.vocabulary;
        const vocabularyLength = questions.length;
        const questionId = Math.floor((Math.random() *vocabularyLength ));
        this.state = {
            selectedIndex: 1,
            questionsCount: vocabularyLength,
            questions: questions,
            questionIndex: questionId,
            buttons: ['Das', 'Die', 'Der'],
            errors: ''
        };
    }


    updateIndex(selectedIndex) {
        this.setState({selectedIndex})
    }

    onPress() {
        //The user answered correctly
        const state = this.state;
        const questionIndex = state.questionIndex;
        if (state.questions[questionIndex].gender === state.buttons[state.selectedIndex]) {
            let newQuestions  = state.questions;
            newQuestions.splice(questionIndex,1);
            let newQuestionId = Math.floor((Math.random() * newQuestions.length));
            this.setState({questions:newQuestions,questionIndex: newQuestionId, errors: ''});
        }
        //The user answered incorrectly

        else {
            this.setState({errors: 'Try again :)'});
        }


    }

    render() {
        const questionD = this.state.questions[this.state.questionIndex];
        const {selectedIndex} = this.state;

        if (questionD!==undefined){
            return (
                <View style={Styles.mainContainer}>
                    <Text style={style.h1}>{questionD.german}</Text>
                    <Text style={style.h2}>{questionD.english}</Text>

                    <ButtonGroup
                        onPress={this.updateIndex.bind(this)}
                        selectedIndex={selectedIndex}
                        buttons={this.state.buttons}
                    />

                    <Button
                        raised
                        backgroundColor='#1D3767'
                        title='Check'
                        onPress={this.onPress.bind(this)}
                    />
                    <FormValidationMessage>{this.state.errors}</FormValidationMessage>

                </View>
            );}
        else {return(
            <View>
                <Text>
                    You have finished your practice!
                </Text>
            </View>
        );}

    }
}

const mapStateToProps = state => {
    return { vocabulary: state.vocabulary};

};
export default connect(mapStateToProps, actions)(Practice);
const style = {

    h2: {fontSize: 15},
    h1: {fontSize: 25},
};

