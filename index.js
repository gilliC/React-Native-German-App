import React from 'react';
import {View, AppRegistry} from 'react-native';

import MainPage from './src/components/mainPage';
import Vocabulary from './src/components/Vocabulary';
import {StackNavigator} from 'react-navigation';

import Styles from './src/styleSheet';

const RootStack = StackNavigator({
        Home: {screen: MainPage,},
        Vocabulary: {screen: Vocabulary,},
    },
    {
        initialRouteName: 'Home',
    }
);
const App = () => {
    return (

        <View style={Styles.body}>
            <RootStack/>
        </View>

    );
};

AppRegistry.registerComponent('ProjTry1', () => App);