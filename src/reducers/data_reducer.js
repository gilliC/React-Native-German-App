import {FETCH_BEGIN, FETCH_FAILURE, FETCH_SUCCESS} from '../actions/index';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {

        case FETCH_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_SUCCESS:
            console.log(action);
            return {
                ...state,
                loading: false,
                items: action.payload.data
            };

        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        default:
            return state;


    }

}