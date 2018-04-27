import React from 'react';
import {
    FETCH_ANSWER_BEGIN, FETCH_ANSWER_FAILURE, FETCH_ANSWER_SUCCESS,CLEAR_ANSWER,
    handleErrors
} from '../constants';
export const fetchAnswerBegin = () => ({
    type: FETCH_ANSWER_BEGIN
});
export const fetchAnswerSuccess = answer => ({
    type: FETCH_ANSWER_SUCCESS,
    payload: {answer}
});
export const fetchAnswerFailure = error => ({
    type: FETCH_ANSWER_FAILURE,
    payload: {error: error}
});
export const clearAnswer = () =>({
    type: CLEAR_ANSWER
});

export function insertWord(germanWord, englishTrans, gender) {
    return dispatch => {
        dispatch(fetchAnswerBegin());
        console.log("insertWord started");
        const url = 'http://35.205.148.41:1617/insert/' + germanWord.toString() + '/' + englishTrans.toString() + '/' + gender.toString();
        fetch(url)
            .then(handleErrors)
            .then(res => {
                return res.json();
            })
            .then(answer => {
                dispatch(fetchAnswerSuccess(answer));
                return answer;
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchAnswerFailure(error))
            });


    }
}
