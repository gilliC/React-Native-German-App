import {combineReducers} from 'redux';
import VocabluaryReducer from './vocabulary_reducer';


export default combineReducers({
    vocabulary:VocabluaryReducer
});