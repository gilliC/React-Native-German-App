import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Styles from '../styleSheet';

export default class Vocabulary extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <View style = {Styles.container}>
                <Text style={style.h1}>Vocabulary</Text>
                </View>
            </View>
        );
    }

}
const style = {
    h1:{
        fontSize:20,
        padding:10
    }
}
