import {combineReducers} from 'redux';
import DataReducer from './data_reducer';
import WordsReducer from './words_reducer';




export default combineReducers({
    data:DataReducer,
    answer:WordsReducer
});

// data : the name of the variable
// DataReducer: the value, which the reducer gives.