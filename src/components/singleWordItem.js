import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Styles from '../styleSheet';
import {capitalizeFirstLetter} from '../constants';

class SingleWordItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let gender = this.props.word.fields.gender;
        gender = capitalizeFirstLetter(gender);
        const german = this.props.word.fields.german_word;
        const english = this.props.word.fields.english_translation;


        let genderStyle;
        switch (gender) {
            case "Der":
                genderStyle = {
                    borderColor: '#58A4B0',

                };
                break;
            case "Das":
                genderStyle = {
                    borderColor: '#1E6446'
                };
                break;

            case "Die":
                genderStyle = {
                    borderColor: '#734B5E'
                };
                break;

        }


        return (
            <View style={[Styles.wordContainer, genderStyle]}>
                <Text style={style.h1}> {gender} {german} </Text>
                <Text style={style.h2}>{english} </Text>

            </View>

        );

    }

}

export default SingleWordItem;


const style = {
    h1: {
        fontSize: 25,
    },
    h2: {
        fontSize: 15,
        paddingLeft:10
    }
};