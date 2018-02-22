import React, {Component} from 'react';
import {Text, Button, View} from 'react-native';

export default class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {greetings: "Hello"}
    }

    onButtonClick() {
        if (this.state.greetings == "Hello")
            this.setState ({greetings:"Hola"});
        else this.setState ({greetings:"Hello"});
}
    render() {
        let btnValue = "";
        const greet = this.state.greetings;
        if (greet == "Hello")
             btnValue = "Change to spanish";
        else  btnValue = "Change to English"

        return (
            <View>
                <Text>
                    {greet} {this.props.userName}
                </Text>
                <Button title= {btnValue} onPress = {this.onButtonClick.bind(this)}/>

            </View>
        );
    }
}