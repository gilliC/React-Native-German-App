import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableOpacity} from 'react-native';

import Styles from '../styleSheet';

import VocabularyList from './vocabularyList';

 class Vocabulary extends Component {
     static navigationOptions = {
         title: 'Vocabulary     ',
     };
    constructor(props) {
        super(props);
    }
    componentDidUpdate(){
        if (!this.props.isConnected.isConnected) {
            console.log("!this.state.isConnected");
            this.props.navigation.navigate('NotConnected');
        }
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
const mapStateToProps = state => {
    console.log(state);
    return {
        isConnected: state.isConnected
    };
};

export default connect(mapStateToProps)(Vocabulary);
