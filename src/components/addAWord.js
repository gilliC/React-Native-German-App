import React, {Component} from 'react';
import {Text, View,TouchableOpacity,TextInput} from 'react-native';
import {ButtonGroup,Icon,Button,FormLabel, FormInput,FormValidationMessage} from 'react-native-elements';



import Styles from '../styleSheet';

export default class AddAWord extends Component {

    constructor(props) {
        super(props);
        this.state = {germanWord:"",englishTrans:"",gender:"",selectedIndex:0}

    }
    onPress(){

    }
    updateIndex(selectedIndex) {
        this.setState({selectedIndex})
    }
    render(){
        const buttons = ['Das', 'Die', 'Der'];
        const { selectedIndex } = this.state;
        let errors ="";

        return(
            <View>
                <View style = {Styles.container}>
                    <Text style={style.h1}>Add a word</Text>
                    <FormLabel>German Word</FormLabel>
                    <FormInput onChangeText={(text) => this.setState({germanWord:text})}/>

                    <FormLabel>English Translation</FormLabel>
                    <FormInput onChangeText={(text) => this.setState({englishTrans:text})}/>


                    <ButtonGroup
                        onPress={this.updateIndex.bind(this)}
                        selectedIndex={selectedIndex}
                        buttons={buttons} />

                    <Button
                        raised
                        icon={{name: 'add'}}
                        backgroundColor='#1D3767'
                        title = 'Add'
                        onPress={this.onPress.bind(this)}
                    />
                    <FormValidationMessage>{errors}</FormValidationMessage>

                </View>
            </View>
        );
    }
}

/**
 *                     <Icon
 reverse
 name='plus'
 type='font-awesome'
 color='#1D3767'
 />
 *
 * @type {{h1: {fontSize: number, padding: number}}}
 */


const style = {
    h1:{
        fontSize:20,
        padding:10
    }
}
