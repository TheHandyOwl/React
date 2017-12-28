import { fetch, post, remove } from 'RepasoParaProbar/src/webservices/webservices'

export function fetchHousesList() {
        const fetchUrl = '/casas'
        return fetch(fetchUrl)
}

export function fetchCharactersList(houseId) {
        const fetchUrl = '/personajes?casa=' + houseId
        return fetch(fetchUrl)
}

export function deleteCharacter(characterId) {
        const fetchUrl = '/personajes/' + characterId
        return remove(fetchUrl)
}

export function addCharacter(data) {
        const fetchUrl = '/personajes'
        return post(fetchUrl, data)
}