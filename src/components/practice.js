import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ButtonGroup, Button, FormValidationMessage} from 'react-native-elements';
import {connect} from 'react-redux';

import Styles from '../styleSheet';
import * as actions from '../actions/vocabulary_actions';
import {designByGender} from '../constants';

class Practice extends Component {
    static navigationOptions = {
        title: 'Practice     ',
    };
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
        this.updateIndex=this.updateIndex.bind(this);
    }

    componentDidMount() {
        if (this.props.items.length === 0|| this.props.items.length<this.props.itemsCount) {
            console.log("practice fetchData()");
            this.props.fetchData();
        }
    }
    componentDidUpdate() {
        if (!this.props.isConnected.isConnected) {
            console.log("!this.state.isConnected");
            this.props.navigation.navigate('NotConnected');
        }

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

        const state = this.state;
        const questions = state.questions;
        const questionDetail = questions[state.questionIndex];
        const {selectedIndex} = state;
        const startedPracticing = state.isStartedPracticing;
        const loading = this.props.loading;
        const error = this.props.error;





        if (questionDetail !== undefined) {
            const germanWord = questionDetail.fields.german_word;
            const englishTranslation = questionDetail.fields.english_translation;
            let btnColor = designByGender(state.buttons[selectedIndex]);
            let btnSelectedStyle = {borderColor:btnColor};
            let btnSelectedTxt = {
                color:btnColor,
                fontSize:20
            };
            let errorTextColor = designByGender(questionDetail.fields.gender);
            const errorTxtStyle = {
                color:errorTextColor,
                fontSize:20};

            return (
                <View style={Styles.practiceContainer}>
                    <Text style={[style.h1,Styles.centerTxt]}>{germanWord}</Text>
                    <Text style={[style.h2,Styles.centerTxt]}>{englishTranslation}</Text>

                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={state.buttons}
                        containerStyle = {style.btnStyle}
                        selectedButtonStyle = {[style.btnSelectedStyle,btnSelectedStyle]}
                        selectedTextStyle ={btnSelectedTxt}

                    />

                    <Button
                        raised
                        backgroundColor='#1D3767'
                        title='Check'
                        onPress={this.onPress}
                    />
                    <Text style = {[Styles.centerTxt,errorTxtStyle]}>{state.errors}</Text>

                </View>
            );
        }
        else {
            if (error)
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
    return {
        items: state.data.items,
        loading: state.data.loading,
        error: state.data.error,
        isConnected: state.isConnected
    };
};
export default connect(mapStateToProps, actions)(Practice);
const style = {
    h2: {fontSize: 20},
    h1: {fontSize: 40},
    btnStyle:{
        height:80
    },
    btnSelectedStyle: {
        borderWidth:2,
    }
};

