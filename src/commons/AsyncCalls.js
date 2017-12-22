import { fetch } from 'RepasoParaProbar/src/webservices/webservices'

export function fetchHousesList() {
        const fetchUrl = '/casas'
        return fetch(fetchUrl)
}

export function fetchCharactersList(houseId) {
        const fetchUrl = '/personajes?casa=' + houseId
        return fetch(fetchUrl)
}