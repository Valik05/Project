import axios from "axios";

export const API_URL = 'https://swapi.dev/api';

const API = axios.create({
    baseURL:API_URL
})


export default API;