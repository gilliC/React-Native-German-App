import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';


import app from './src/reducers/index';

export default function configureStore() {
    let store =  createStore(app,{}, applyMiddleware(ReduxThunk));
    return store
};