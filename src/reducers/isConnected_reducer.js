import {CHANGED_CONNECTION} from '../constants';

const initialState = {
isConnected:true
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGED_CONNECTION:
            return {
                ...state,
                isConnected: action.payload.isConnected
            };

        default:
            return state;


    }

}