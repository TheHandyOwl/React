import axios from 'axios'
import * as constants from './constants'

export function configureAxios() {
//export function configureAxios(AUTH_TOKEN) {
    axios.defaults.baseURL = constants.BASE_URL;
    //axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
}
