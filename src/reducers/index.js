import {combineReducers} from 'redux';
import VocabluaryReducer from './vocabulary_reducer';


export default combineReducers({
    vocabulary: VocabluaryReducer
});

// vocabulary : the name of the variable
// VocabularyReducer: the value, which the reducer gives.