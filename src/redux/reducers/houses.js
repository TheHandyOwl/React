import * as types from '../types/houses'

const initialState = {
    isFetching: false,
    list: [],
    item: null,
    // Para paginación
    //total: 0,
    //offset: 0,
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case types.HOUSES_UPDATE_LIST:
            return {
                ...state,
                list: action.value,
                //item: action.item
            }
            
        default:
            return state
    }
}