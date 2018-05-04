import {combineReducers} from 'redux';
import DataReducer from './data_reducer';
import WordsReducer from './word_reducer';
import ConnectedReducer from './isConnected_reducer';




export default combineReducers({
    data:DataReducer,
    answer:WordsReducer,
    isConnected:ConnectedReducer
});

// data : the name of the variable
// DataReducer: the value, which the reducer gives.