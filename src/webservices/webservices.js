import axios from 'axios'
import * as constants from './constants'

export function configureAxios() {
//export function configureAxios(AUTH_TOKEN) {
    axios.defaults.baseURL = constants.BASE_URL;
    //axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
}

export function fetch(url) {
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
}
