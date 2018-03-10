import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ButtonGroup, Icon, Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import {connect} from 'react-redux';


import Styles from '../styleSheet';
import * as actions from '../actions/index';


 class Practice extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedIndex: 1, questions:[0,1,2], questionIndex:0,buttons:['Das', 'Die', 'Der'],errors:''};


    }

    componentWillMount(){
        this.props.GetWordDetails(this.state.questionIndex);

    }

    updateIndex(selectedIndex) {
        this.setState({selectedIndex})
    }

    onPress() {

        if (this.props.questionDetails.gender === this.state.buttons[this.state.selectedIndex]){
            this.setState({errors:'Work'});
        };

    }

    render() {
        const questionD = this.props.questionDetails;
        const {selectedIndex} = this.state;


        return (
            <View  style={Styles.container}>
                <Text style={style.h1}>{questionD.german}</Text>
                <Text style={style.h2}>{questionD.english}</Text>

                <ButtonGroup
                    onPress={this.updateIndex.bind(this)}
                    selectedIndex={selectedIndex}
                    buttons={ this.state.buttons}
                />

                <Button
                    raised
                    backgroundColor='#1D3767'
                    title='Check'
                    onPress={this.onPress.bind(this)}
                />
                <FormValidationMessage>{this.state.errors}</FormValidationMessage>

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
};