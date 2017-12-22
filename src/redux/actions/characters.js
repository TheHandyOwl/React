import * as types from '../types/characters'
import { AsyncCalls, Colors } from 'RepasoParaProbar/src/commons';

function updateCharactersList(value) {
    return {
        type: types.CHARACTERS_UPDATE_LIST,
        value
    }
}

function setCharactersFetching(value) {
    return {
        type: types.CHARACTERS_SET_FETCHING,
        value
    }
}

export function updateCharacterSelected(value) {
    return {
        type: types.CHARACTERS_UPDATE_CHARACTER,
        value
    }
}

export function fetchCharactersList(houseId) { // Función que carga del WS el listado
    return (dispatch, getState) => {

        console.log("fetchCharactersList houseId: ", houseId)

        dispatch(setCharactersFetching(true))
        // Vamos a vaciar la información que hubiese
        dispatch(updateCharactersList([]))

        AsyncCalls.fetchCharactersList(houseId)
            .then( response => {
                dispatch(setCharactersFetching(false))
                console.log("CharactersList fetch response: ", response)
                dispatch(updateCharactersList(response.records))
            })
            .catch( error => {
                dispatch(setCharactersFetching(false))
                console.log("CharactersList fetch error:", response)
                dispatch(updateCharactersList([]))
            })
        // Aquí el dispatch se ejecuta de forma síncrona, e inmediata con response vacío
        //dispatch(updateCharactersList(response.records))
    }
}
