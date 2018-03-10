import React, {Component} from 'react';
import {Text, View,TouchableOpacity} from 'react-native';

import {} from 'react-native-elements';


import Styles from '../styleSheet';


export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    onPressVocabulary(){
        this.props.navigation.navigate('Vocabulary');
    }
    onPressPractice() {
        this.props.navigation.navigate('Practice');

    }

        render() {
        return (

                <View>
                    <TouchableOpacity onPress={this.onPressVocabulary.bind(this)} style = {Styles.btn}>
                        <Text style={Styles.btnTxt}>Vocabulary</Text>
                    </TouchableOpacity>
                    <Text style={style.h1}>Hello User</Text>
                    <TouchableOpacity style = {Styles.btn}>
                        <Text onPress={this.onPressPractice.bind(this)} style={Styles.btnTxt}>Practice</Text>
                    </TouchableOpacity>
                </View>

        );
    }
}

const style = {
    h1:{
        fontSize:20,
        padding:10
    }
};
