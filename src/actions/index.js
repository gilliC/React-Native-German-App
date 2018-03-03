export const GetWordDetails = (wordId) => {
    return {
        type: 'get_word_details',
        payload: wordId

    };
};