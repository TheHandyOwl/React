import * as types from '../types/houses'
import { AsyncCalls, Colors } from 'RepasoParaProbar/src/commons';

function updateHousesList(value) {
    return {
        type: types.HOUSES_UPDATE_LIST,
        value
    }
}

export function updateHouseSelected(value) {
    return {
        type: types.HOUSES_UPDATE_HOUSE,
        value
    }
}

export function fetchHousesList() { // Función que carga del WS el listado
    return (dispatch, getState) => {

        AsyncCalls.fetchHousesList()
            .then( response => {
                console.log("HousesList fetch response: ", response)
                dispatch(updateHousesList(response.records))
            })
            .catch( error => {
                console.log("HousesList fetch error:", response)
                dispatch(updateHousesList([]))
            })
        // Aquí el dispatch se ejecuta de forma síncrona, e inmediata con response vacío
        //dispatch(updateHousesList(response.records))
    }
}
