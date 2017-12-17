import axios from 'axios'

export function fetchHousesList() {
    const fetchUrl = '/casas'
    return axios.get(fetchUrl)
        .then( (response) => {
            console.log("axios get response: ", response);
            const list = response.data && response.data.records ? response.data.records : []
            //this.setState( { list: list } )
            return list
        })
        .catch( (error) => {
            console.log("axios get error: ", error);
        })
}