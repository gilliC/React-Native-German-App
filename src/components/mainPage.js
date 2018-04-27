import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import Styles from '../styleSheet';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.onPressVocabulary=this.onPressVocabulary.bind(this);
        this.onPressPractice=this.onPressPractice.bind(this);

    }

    onPressVocabulary() {
        this.props.navigation.navigate('Vocabulary');
    }

    onPressPractice() {
        this.props.navigation.navigate('Practice');

    }


    render() {
        return (
            <View style={Styles.mainContainer}>
                <View>
                    <TouchableOpacity onPress={this.onPressVocabulary} style={Styles.btn}>
                        <Text style={Styles.btnTxt}>Vocabulary</Text>
                    </TouchableOpacity>
                    <Text style={[style.h1,Styles.centerTxt]}>Hello User!</Text>
                    <TouchableOpacity style={Styles.btn}>
                        <Text onPress={this.onPressPractice} style={Styles.btnTxt}>Practice</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const style = {
    h1: {
        fontSize: 20,
        padding: 10
    }
};
