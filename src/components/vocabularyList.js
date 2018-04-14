import React, {Component} from 'react';
import {Text, View, ListView} from 'react-native';

import {connect} from 'react-redux';

import {fetchData} from '../actions/index';
import SingleWordItem from './singleWordItem';
import Styles from '../styleSheet';


class VocabularyList extends Component {
    constructor(props) {
        super(props);
        this.state = {isPressed: false}
    }

    componentDidMount() {
        this.props.fetchData();
    }

    renderRow(word) {
        return (
            <SingleWordItem word={word}/>

        );
    }

    onPress() {
        this.props.navigation.navigate('AddAWord');

    }


    render() {

        let viewlist = <Text style={style.h1}>Loading ..</Text>;
        const {error, loading, items} = this.props;

        if (error) {
            viewlist = <Text style={style.h1}>Error! {error.message}</Text>;
        }
        if (loading) {
            console.log("loading...");
            viewlist = <Text style={style.h1}>Loading ..</Text>;
        }
        if (items) {
            const ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            });
            this.dataSource = ds.cloneWithRows(this.props.items);
            console.log(this.dataSource);
            viewlist = <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        }
        if (viewlist === undefined)
            viewlist = <Text style={style.h1}>an unknown error</Text>;
        return (
            <View>
                {viewlist}
            </View>

        );
    }
}

const mapStateToProps = state => {
    console.log(state);

    return {
        items: state.data.items,
        loading: state.data.loading,
        error: state.data.error
    };
    //return the data in state (reducer). vocabulary as a prop under the key vocabulary

};

export default connect(mapStateToProps, {fetchData})(VocabularyList);

const style = {
    h1: {
        fontSize: 20,
        padding: 10,
        alignItems: 'center'
    }
};