import React from 'react';

import {
    FETCH_DATA_BEGIN, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS,
    handleErrors
} from '../constants';

export const fetchDataBegin = () => ({
    type: FETCH_DATA_BEGIN
});
export const fetchDataSuccess = data => ({
    type: FETCH_DATA_SUCCESS,
    payload: {data}
});
export const fetchDataFailure = error => ({
    type: FETCH_DATA_FAILURE,
    payload: {error: error}
});



export function fetchData() {
    return dispatch => {
        dispatch(fetchDataBegin());

        fetch('http://35.205.148.41:1617/')
            .then(handleErrors)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(fetchDataSuccess(data));
                return data;
            })
            .catch(error => {
                dispatch(fetchDataFailure(error))
            });
    };

}
