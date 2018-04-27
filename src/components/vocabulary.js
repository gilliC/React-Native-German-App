import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import Styles from '../styleSheet';

import VocabularyList from './vocabularyList';

export default class Vocabulary extends Component {

    constructor(props) {
        super(props);
    }

    onPress() {
        this.props.navigation.navigate('AddAWord');

    }

    render() {
        return (
            <View>
                    <View style={Styles.vocabularyContainer}>
                        <TouchableOpacity style={Styles.btn} onPress={this.onPress.bind(this)}>
                            <Text style={Styles.btnTxt}>Add a word</Text>
                        </TouchableOpacity>
                    </View>
                    <VocabularyList/>

            </View>
        );
    }

}
