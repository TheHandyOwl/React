import axios from 'axios'

export function fetchHousesList() {
    const fetchUrl = 'http://146.185.137.85/got/web/casas'
    return axios.get(fetchUrl)
}