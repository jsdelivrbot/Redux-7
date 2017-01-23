import {
    FEATURE_MESSAGE,
} from '../actions/types'


export default function (state = {}, action) {
    switch (action.type) {
        case FEATURE_MESSAGE:
            return {...state, message: action.payload};
    }

    return state;
}