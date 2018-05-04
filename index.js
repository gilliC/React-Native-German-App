import React from 'react';
import {View, AppRegistry, NetInfo} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';

import MainPage from './src/components/mainPage';
import Vocabulary from './src/components/vocabulary';
import Practice from './src/components/practice';
import AddAWord from './src/components/addAWord';
import NotConnected from './src/components/notConnected';

import Styles from './src/styleSheet';
import store from './configureStore';

import {Animated, Easing} from 'react-native';
const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 750,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;

            const thisSceneIndex = scene.index;
            const width = layout.initWidth;

            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0],
            });

            return { transform: [ { translateX } ] };
        },
    }
};

const RootStack = StackNavigator({
        Home: {screen: MainPage,},
        Vocabulary: {screen: Vocabulary,},
        AddAWord: {screen: AddAWord,},
        Practice: {screen: Practice,},
        NotConnected: {screen: NotConnected,},
    },
    {
        initialRouteName: 'Home',
        transitionConfig,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#1D3767',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerBackTitleStyle: {
                color: 'white'
            },
            headerTruncatedBackTitle: 'Back',
        },
    }
);


const App = () => {
    return (
        <Provider store={store()}>
            <View style={Styles.body}>
                <RootStack/>
            </View>
        </Provider>

    );
};

AppRegistry.registerComponent('ProjTry1', () => App);
