import React from 'react';
import {View, AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';

import MainPage from './src/components/mainPage';
import Vocabulary from './src/components/vocabulary';
import AddAWord from './src/components/addAWord';

import Styles from './src/styleSheet';

import App from './src/components/tryRedux';


AppRegistry.registerComponent('ProjTry1', () => App);


/**
 *
 * const RootStack = StackNavigator({
        Home: {screen: MainPage,},
        Vocabulary: {screen: Vocabulary,},
    AddAWord:{screen:AddAWord,}
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
 **/
