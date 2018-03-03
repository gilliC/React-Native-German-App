import React from 'react';
import {View, AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import MainPage from './src/components/mainPage';
import Vocabulary from './src/components/vocabulary';
import Practice from './src/components/practice';
import AddAWord from './src/components/addAWord';

import Styles from './src/styleSheet';
import reducers from './src/reducers/index';

const RootStack = StackNavigator({
        Home: {screen: MainPage,},
        Vocabulary: {screen: Vocabulary,},
        AddAWord: {screen: AddAWord,},
        Practice: {screen: Practice,},

    },
    {
        initialRouteName: 'Home',
    }
);
const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={Styles.body}>
                <RootStack/>
            </View>
        </Provider>

    );
};

AppRegistry.registerComponent('ProjTry1', () => App);
