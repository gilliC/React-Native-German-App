import {FETCH_DATA_BEGIN, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS} from '../constants';

const initialState = {
    items: [],
    itemsCount:0,
    loading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {

        case FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                itemsCount:action.payload.data.length,
                loading: false,
                items: action.payload.data
            };

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                itemsCount:0,
                items: [],
            };

        default:
            return state;


    }

}