import {combineReducers} from 'redux';
import VocabluaryReducer from './vocabulary_reducer';
import QuestionReducer from './question_reducer';
import WordsCountReducer from './vocabulary_count_reducer';


export default combineReducers({
    vocabulary: VocabluaryReducer,
    questionDetails: QuestionReducer,
    wordsCount: WordsCountReducer
});

// vocabulary : the name of the variable
// VocabularyReducer: the value, which the reducer gives.