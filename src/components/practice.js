import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ButtonGroup, Icon, Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import {connect} from 'react-redux';


import Styles from '../styleSheet';
import * as actions from '../actions/index';


 class Practice extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedIndex: 0, questions:[0,1,2]}

    }

    componentWillMount(){
        this.props.GetWordDetails(this.state.selectedIndex);

    }

    updateIndex(selectedIndex) {
        this.setState({selectedIndex})
    }

    onPress() {

    }

    render() {

        const buttons = ['Das', 'Die', 'Der'];
        const {selectedIndex} = this.state;
        let errors = "";


        return (
            <View  style={Styles.container}>
                <Text style={style.h1}>{this.props.questionDetails}</Text>

                <ButtonGroup
                    onPress={this.updateIndex.bind(this)}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    selectedButtonStyle={style.btnContainer}
                />

                <Button
                    raised
                    backgroundColor='#1D3767'
                    title='Check'
                    onPress={this.onPress.bind(this)}
                />
                <FormValidationMessage>{errors}</FormValidationMessage>

            </View>
        );

    }
}
const mapStateToProps= state =>{
     return{questionDetails: state.questionDetails};

};
export default connect(mapStateToProps,actions)(Practice);
const style = {

    h2: {fontSize: 15},
    h1: {fontSize: 25},
    btnContainer:{

    }
};