import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ButtonGroup, Icon, Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import {connect} from 'react-redux';

import Styles from '../styleSheet';
import * as actions from '../actions/vocabularyActions';
import {capitalizeFirstLetter} from '../constants';

class Practice extends Component {
    constructor(props) {
        super(props);
        let isStartedPracticing = false;
        let loading = this.props.loading;
        let error = this.props.error;
        let vocabularyLength = this.props.items.length;
        let questions = this.props.items.slice();
        const questionId = Math.floor((Math.random() * vocabularyLength ));

        if (vocabularyLength !== 0) {
            isStartedPracticing = true;
        }

        this.state = {
            selectedIndex: 1,
            isStartedPracticing: isStartedPracticing,
            loading: loading,
            questionsCount: vocabularyLength,
            questions: questions,
            questionIndex: questionId,
            buttons: ['Das', 'Die', 'Der'],
            error: error
        }
        ;

        this.onPress=this.onPress.bind(this);
    }

    componentDidMount() {
        if (this.props.items.length === 0) {
            console.log("practice fetchData()");
            this.props.fetchData();
        }
    }
    componentDidUpdate() {
        const items = this.props.items;
        const questions = this.state.questions.slice();
        const startedPracticing = this.state.isStartedPracticing;
        if (!startedPracticing && items.length !== questions.length) {
            this.setState({questions: items, questionsCount: items.length, isStartedPracticing: true});
        }
    }

    updateIndex(selectedIndex) {
        this.setState({selectedIndex})
    }

    onPress() {
        //The user answered correctly
        const state = this.state;
        const questionIndex = state.questionIndex;
        let gender = state.questions[questionIndex].fields.gender ;
        gender = capitalizeFirstLetter(gender);
        if (gender === state.buttons[state.selectedIndex]) {
            let newQuestions = state.questions;
            newQuestions.splice(questionIndex, 1);
            let newQuestionId = Math.floor((Math.random() * newQuestions.length));
            this.setState({questions: newQuestions, questionIndex: newQuestionId, errors: ''});
        }
        //The user answered incorrectly

        else {
            this.setState({errors: 'Try again :)'});
        }


    }

    render() {

        const items = this.props.items;
        const state = this.state;
        const questions = state.questions;
        const questionD = questions[state.questionIndex];
        const {selectedIndex} = state;
        const startedPracticing = state.isStartedPracticing;
        const loading = state.loading;
        const errors = state.error;




        if (questionD !== undefined) {
            const germanWord = questionD.fields.german_word;
            const englishTranslation = questionD.fields.english_translation;
            return (
                <View style={Styles.practiceContainer}>
                    <Text style={[style.h1,Styles.centerTxt]}>{germanWord}</Text>
                    <Text style={[style.h2,Styles.centerTxt]}>{englishTranslation}</Text>

                    <ButtonGroup
                        onPress={this.updateIndex.bind(this)}
                        selectedIndex={selectedIndex}
                        buttons={state.buttons}
                    />

                    <Button
                        raised
                        backgroundColor='#1D3767'
                        title='Check'
                        onPress={this.onPress}
                    />
                    <FormValidationMessage>{state.errors}</FormValidationMessage>

                </View>
            );
        }
        else {
            if (errors)
                return (
                    <View>
                        <Text style={style.h1}>Error! {error.message}</Text>
                    </View>
                );

            if (startedPracticing)
                return (
                    <View>
                        <Text style={[style.h1,Styles.centerTxt]}>
                            You have finished your practice!
                        </Text>
                    </View>
                );

            else {
                if (loading) {
                    return (
                        <View>
                            <Text style={[style.h1,Styles.centerTxt]}>
                                Loading ..
                            </Text>
                        </View>
                    );
                }
                else {
                    return (
                        <View>
                            <Text style={[style.h1,Styles.centerTxt]}>
                              Wait ..
                            </Text>
                        </View>
                    );
                }
            }
        }

    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        items: state.data.items,
        loading: state.data.loading,
        error: state.data.error
    };
};
export default connect(mapStateToProps, actions)(Practice);
const style = {

    h2: {fontSize: 15},
    h1: {fontSize: 25},
};

