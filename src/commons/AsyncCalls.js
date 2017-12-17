import axios from 'axios'

export function fetchHousesList() {
    const fetchUrl = '/casas'
    return axios.get(fetchUrl)
        .then( (response) => {
            console.log("AsyncCalls axios get response: ", response);
            const list = response.data && response.data.records ? response.data.records : []
            return list
        })
        .catch( (error) => {
            console.log("AsyncCalls axios get error: ", error);
        })
}