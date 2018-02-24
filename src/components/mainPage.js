import React, {Component} from 'react';
import {Text, View,TouchableOpacity} from 'react-native';

import Styles from '../styleSheet';


export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    onPress(){
        this.props.navigation.navigate('Vocabulary');
    }
    render() {
        return (

                <View style={Styles.container}>
                    <TouchableOpacity onPress={this.onPress.bind(this)} style = {Styles.btn}>
                        <Text style={Styles.btnTxt}>Vocabulary</Text>
                    </TouchableOpacity>
                    <Text style={style.h1}>Hello User</Text>
                    <TouchableOpacity style = {Styles.btn}>
                        <Text style={Styles.btnTxt}>Practice</Text>
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
}
