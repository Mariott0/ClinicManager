import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.3.104:3000', // Substitua pelo IP do seu backend
});
{/*http://172.16.0.75:3000 - fag  */ }
{/*http://192.168.3.104:3000 - CASA*/ } 