import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ButtonGroup, Icon, Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import {connect} from 'react-redux';


import Styles from '../styleSheet';
import * as actions from '../actions/index';


class Practice extends Component {
    constructor(props) {
        super(props);
        const questionId = Math.floor((Math.random() * this.props.wordsCount));
        this.state = {
            selectedIndex: 1,
            questionsCount: 9,
            questions:this.props.vocabulary,
            questionIndex: questionId,
            buttons: ['Das', 'Die', 'Der'],
            errors: ''
        };
    }
r
    componentDidMount() {
        this.setState({questions:this.props.vocabulary,questionsCount:this.props.vocabulary.length});
        this.props.GetWordDetails(this.state.questionIndex);
    }

    componentDidUpdate() {
        const questionI = this.state.questionIndex;
        if (this.props.GetWordDetails.id !== questionI)
            this.props.GetWordDetails(questionI);
    }

    updateIndex(selectedIndex) {
        this.setState({selectedIndex})
    }

    onPress() {

        if (this.props.questionDetails.gender === this.state.buttons[this.state.selectedIndex]) {
            let newQuestionId = Math.floor((Math.random() * this.props.wordsCount));
            this.setState({questionIndex: newQuestionId, errors: ''});
        }
        else {
            this.setState({errors: 'Try again :)'});
        }


    }

    render() {
        const questionD = this.state.questions[this.state.questionIndex];
        const {selectedIndex} = this.state;


        return (
            <View style={Styles.container}>
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

        );

    }
}

const mapStateToProps = state => {
    return {questionDetails: state.questionDetails, wordsCount: state.wordsCount,vocabulary:state.vocabulary};

};
export default connect(mapStateToProps, actions)(Practice);
const style = {

    h2: {fontSize: 15},
    h1: {fontSize: 25},
};

/**
 *       <View style={Styles.container}>
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
 **/