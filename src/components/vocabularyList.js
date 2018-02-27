import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native';
import {connect} from 'react-redux';

import SingleWordItem from './singleWordItem';

class VocabularyList extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.vocabulary);
    }

    renderRow(word) {
        return (
            <SingleWordItem word={word}/>

        );

    }

    render() {
        return (
            <View>
                <Text>Vocabulary List</Text>
                <ListView
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </View>

        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {vocabulary: state.vocabulary};
    //return the data in state (reducer). vocabulary as a prop under the key vocabulary

};

export default connect(mapStateToProps)(VocabularyList);