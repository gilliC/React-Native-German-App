import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import {ButtonGroup, Icon, Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';

import {wordCreate} from '../actions/index';

import Styles from '../styleSheet';

class AddAWord extends Component {

    constructor(props) {
        super(props);
        this.state = {germanWord: "", englishTrans: "", gender: "", selectedIndex: 0}
        this.onSendingForm = this.onSendingForm.bind(this);
        this.updateIndex = this.updateIndex.bind(this);

    }

    onSendingForm() {
        const {germanWord, englishTrans, gender} = this.state;
        this.props.wordCreate({germanWord, englishTrans, gender});

    }

    updateIndex(selectedIndex) {
        this.setState({selectedIndex})
    }

    render() {
        const buttons = ['Das', 'Die', 'Der'];
        const {selectedIndex} = this.state;
        let errors = "";

        return (
            <View>
                <View style={Styles.mainContainer}>
                    <Text style={style.h1}>Add a word</Text>
                    <FormLabel>German Word</FormLabel>
                    <FormInput onChangeText={(text) => this.setState({germanWord: text})}/>

                    <FormLabel>English Translation</FormLabel>
                    <FormInput onChangeText={(text) => this.setState({englishTrans: text})}/>


                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}/>

                    <Button
                        raised
                        icon={{name: 'add'}}
                        backgroundColor='#1D3767'
                        title='Add'
                        onPress={this.onSendingForm}
                    />
                    <FormValidationMessage>{errors}</FormValidationMessage>

                </View>
            </View>
        );
    }
}
export default connect(null,{wordCreate})(AddAWord);

const style = {
    h1: {
        fontSize: 20,
        padding: 10
    }
};
