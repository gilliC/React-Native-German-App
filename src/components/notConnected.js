import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';

import Styles from '../styleSheet';

 class NotConnected extends Component {
     static navigationOptions = {
         title: 'an error has occurred     ',
     };
    constructor(props) {
        super(props);


    }
    componentDidUpdate(){
        if (this.props.isConnected.isConnected) {
            console.log("isConnected");
            this.props.navigation.navigate('Home');
        }

    }

    render() {
        return (
            <View>
                <Text style={[style.h1,Styles.centerTxt]}>NO INTERNET CONNECTION</Text>
                <Text style={Styles.centerTxt}> The App cannot work without internet connection.</Text>
            </View>

        );
    }
}
const mapStateToProps = state => {
    console.log(state);
    return {
        isConnected: state.isConnected
    };
    //return the data in state (reducer). vocabulary as a prop under the key vocabulary

};

export default connect(mapStateToProps)(NotConnected);

const style = {
    h1: {
        fontSize: 20,
        padding: 10
    }
};
