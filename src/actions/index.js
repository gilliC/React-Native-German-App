export const GetWordDetails = (wordId) => {
    return {
        type: 'get_word_details',
        payload: wordId
    };
};
export const GetVocabulary = () => {
    return {
        type: 'get_vocabulary',
        payload: ''
    };
};