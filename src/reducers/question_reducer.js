import data from './vocabularyWords.json';
export default (state = null,action) =>{

    switch (action.type){
        case 'get_word_details':
            return return "Working";
        default:
            return state;
    }

};