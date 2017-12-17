import { fetch } from 'RepasoParaProbar/src/webservices/webservices'

export function fetchHousesList() {
        const fetchUrl = '/casas'
        return fetch(fetchUrl)
}