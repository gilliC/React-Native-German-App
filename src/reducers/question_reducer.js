import data from './vocabularyWords.json';
export default (state = {},action) =>{

    switch (action.type){
        case 'get_word_details':
            return data[action.payload];
        default:
            return state;
    }

};