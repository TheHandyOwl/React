import axios from 'axios'
import * as constants from './constants'

export function configureAxios() {
//export function configureAxios(AUTH_TOKEN) {
    axios.defaults.baseURL = constants.BASE_URL;
    //axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
}

export function fetch(url) {
    return new Promise ( function(resolve, reject) {
        axios.get(url)
            .then( (response) => {
                console.log("webservie axios get response: ", response);

                if(response.data) {
                    resolve ( response.data )
                } else {
                    reject ( response )
                }
            })
            .catch( (error) => {
                reject ( error )
            })
        })

        // Ese los mismo, pero sin promise
        /*
        return axios.get(url)
        .then( (response) => {
            console.log("webservie axios get response: ", response);

            if(response.data) {
                return ( response.data )
            } else {
                return ( response )
            }
        })
        .catch( (error) => {
            return ( error )
        })
        */
}

export function fetchAlternativo(url) {
    return axios.get(url).then((response) => {

        return response.data

    }).catch((error) => {

        if (error.response) {
            throw { code: error.response.status, msg: error.response.data, error: error }
        } else {
            throw { code: 500, msg: error.message, error: error }
        }

    });
}

export function post(url, data) {
    return new Promise ( function(resolve, reject) {
        axios.post(url, data)
            .then( (response) => {
                console.log("webservie axios post response: ", response);

                if(response.data) {
                    resolve ( response.data )
                } else {
                    reject ( response )
                }
            })
            .catch( (error) => {
                reject ( error )
            })
        })
}

export function postAlternativo(url, data) {
    return axios.post(url, data).then((response) => {

        return response.data

    }).catch((error) => {

        if (error.response) {
            throw { code: error.response.status, msg: error.response.data, error: error }
        } else {
            throw { code: 500, msg: error.message, error: error }
        }

    });
}

// Delete
export function remove(url) {
    return new Promise ( function(resolve, reject) {
        axios.delete(url)
            .then( (response) => {
                console.log("webservie axios delete response: ", response);

                if(response.data) {
                    resolve ( response.data )
                } else {
                    reject ( response )
                }
            })
            .catch( (error) => {
                reject ( error )
            })
        })
}
