import * as types from '../types/characters'
import { AsyncCalls, Colors } from 'RepasoParaProbar/src/commons';
import { Actions } from 'react-native-router-flux';

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

export function deleteCharacter(character) {
    return (dispatch, getState) => {

        dispatch(setCharactersFetching(true))

        const state = getState()
        const house = state.houses.item ? state.houses.item : null

        AsyncCalls.deleteCharacter(character.id)
            .then( response => {
                dispatch(setCharactersFetching(false))
                console.log("deleteCharacter response: ", response)
                if (response.status && response.status == "ok") {
                    dispatch(fetchCharactersList(house.id))
                    dispatch(updateCharacterSelected(null))
                    Actions.pop()
                }
            })
            .catch( error => {
                dispatch(setCharactersFetching(false))
                console.log("deleteCharacter fetch error:", error)
                dispatch(updateCharactersList([]))
            })

    }
}

export function postCharacter(data) {
    return (dispatch, getState) => {

        dispatch(setCharactersFetching(true))
        const state = getState()
        const house = state.houses.item
        
        AsyncCalls.addCharacter(data)
            .then( response => {
                dispatch(setCharactersFetching(false))
                console.log("addCharacter response: ", response)
                if (response.record) {
                    dispatch(fetchCharactersList(house.id))
                    dispatch(updateCharacterSelected(null))
                    Actions.pop()
                }
            })
            .catch( error => {
                dispatch(setCharactersFetching(false))
                console.log("addCharacter fetch error:", error)
                dispatch(updateCharactersList([]))
            })
    }
}