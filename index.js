import React from 'react';
import {Text, View, AppRegistry} from 'react-native';

import Header from './src/components/header';
import Body from './src/components/body';


const App = () => {
    return (
        <View>
            <Header/>
            <Body userName = 'Mighty1617'/>
        </View>
    );
};

AppRegistry.registerComponent('ProjTry1', () => App);