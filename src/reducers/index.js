import {combineReducers} from 'redux';
import DataReducer from './data_reducer';



export default combineReducers({
    data:DataReducer
});

// vocabulary : the name of the variable
// VocabularyReducer: the value, which the reducer gives.