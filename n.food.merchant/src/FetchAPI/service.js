import axios from 'axios';

export const Service = axios.create({ 
    baseURL : 'http://demo-mobile-api.vastbit.com/api/',
})