import {FETCH_ANSWER_BEGIN, FETCH_ANSWER_FAILURE, FETCH_ANSWER_SUCCESS} from '../constants';

const initialState = {
    answer: null,
    loading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {

        case FETCH_ANSWER_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_ANSWER_SUCCESS:
            return {
                ...state,
                loading: false,
                answer: action.payload.answer
            };

        case FETCH_ANSWER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                answer:null
            };

        default:
            return state;


    }

}