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
                genderStyle = style.der;
                break;
            case "Das":
                genderStyle = style.das;
                break;

            case "Die":
                genderStyle = style.die;
                break;

        }


        return (
            <View style={Styles.itemList}>
                <Text style={genderStyle}> {gender} {this.props.word.german}</Text>
                <Text style={style.h2}>{this.props.word.english}</Text>
                <Divider style={{backgroundColor: '#58A4B0'}}/>

            </View>

        );

    }

}

export default SingleWordItem;


const style = {
    h2: {fontSize: 15,},
    der: {fontSize: 25, color: "#1D3767"},
    die: {fontSize: 25, color: "#734B5E"},
    das: {fontSize: 25, color: "#CACF85"}

};