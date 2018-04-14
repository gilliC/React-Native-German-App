import {combineReducers} from 'redux';
import VocabluaryReducer from './vocabulary_reducer';
import DataReducer from './data_reducer';



export default combineReducers({
    vocabulary: VocabluaryReducer,
    data:DataReducer
});

// vocabulary : the name of the variable
// VocabularyReducer: the value, which the reducer gives.