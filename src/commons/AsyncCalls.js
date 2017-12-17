import axios from 'axios'

export function fetchHousesList() {
    return new Promise (function(resolve, reject) {
        const fetchUrl = '/casas'
        axios.get(fetchUrl)
            .then( (response) => {
                console.log("AsyncCalls axios get response: ", response);
                //const list = response.data && response.data.records ? response.data.records : []
                if(response.data) {
                    resolve ( response.data )
                } else {
                    reject ( response )
                }
                
            })
            .catch( (error) => {
                console.log("AsyncCalls axios get error: ", error);
                reject ( error )
            })
    })

    // Es lo mismo pero sin promise
    /*
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
    */
}