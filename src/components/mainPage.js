import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableOpacity, NetInfo} from 'react-native';

import {HandleConnectionChanged} from '../actions/connecting_actions';
import Styles from '../styleSheet';

class MainPage extends Component {
    static navigationOptions = {
        title: 'Home          ',
    };
    constructor(props) {
        super(props);
        this.state = {isConnected: true};
        this.onPressVocabulary = this.onPressVocabulary.bind(this);
        this.onPressPractice = this.onPressPractice.bind(this);

    }
    componentDidMount() {
        NetInfo.addEventListener(
            'connectionChange', this.props.HandleConnectionChanged
        );
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            console.log(connectionInfo);
            if (connectionInfo.type === "unknown" || connectionInfo.type === "none")
                console.log("none!!");
            //this.props.navigation.navigate('NotConnected');
        });
    }
    componentDidUpdate(){
        if (!this.props.isConnected.isConnected) {
            console.log("!this.state.isConnected");
            this.props.navigation.navigate('NotConnected');
        }
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
                    <Text style={[style.h1, Styles.centerTxt]}>Hello User!</Text>
                    <TouchableOpacity style={Styles.btn}>
                        <Text onPress={this.onPressPractice} style={Styles.btnTxt}>Practice</Text>
                    </TouchableOpacity>
                </View>
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

export default connect(mapStateToProps, {HandleConnectionChanged})(MainPage);

const style = {
    h1: {
        fontSize: 20,
        padding: 10
    }
};
