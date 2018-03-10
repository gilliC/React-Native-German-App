import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Divider} from 'react-native-elements';

import Styles from '../styleSheet';


class SingleWordItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const gender = this.props.word.gender;
        let genderStyle;
        switch (gender) {
            case "Der":
                genderStyle = {
                    backgroundColor: '#58A4B0'
                };
                break;
            case "Das":
                genderStyle = {
                    backgroundColor: '#1E6446'
                };
                break;

            case "Die":
                genderStyle = {
                    backgroundColor: '#734B5E'
                };
                break;

        }


        return (
            <View style={[Styles.itemContainer, genderStyle]}>
                <Text style={style.h1}> {gender} {this.props.word.german} </Text>
                <Text style={style.h2}>{this.props.word.english} </Text>

            </View>

        );

    }

}

export default SingleWordItem;


const style = {
    h1: {
        fontSize: 25,
        color: 'white'
    },
    h2: {
        fontSize: 15,
        color: 'white',
        paddingLeft:10
    }
};