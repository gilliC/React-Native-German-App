import React from 'react';

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

export const wordCreate = ({germanWord, englishTrans, gender}) => {
    return null;
    //I will get back to it later
};

export const FETCH_BEGIN = 'FETCH_BEGIN';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchBegin = () => ({
    type: FETCH_BEGIN
});

export const fetchSuccess = data => ({
    type: FETCH_SUCCESS,
    payload: {data}
});

export const fetchFailure = error => ({
    type: FETCH_FAILURE,
    payload: {error}
});

//Handle HTTP errors, since fetch doesn't
function handleErrors(response) {
    console.log("HandleErrors/actions response.ok:" +response.ok);

    if (!response.ok) {
        console.log("Error " + response.statusText);

        throw Error(response.statusText);
    }
    return response;
}

export function fetchData() {
    console.log("fetchdata");
    return dispatch => {
        dispatch(fetchBegin());

         fetch('http://35.205.148.41:1617/')
            .then(handleErrors)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(fetchSuccess(data));
                return data;
            })
            .catch(error => {
                dispatch(fetchFailure(error))});
    };

};


//WORKING ALL