import Config from './config.js';
import axios from 'axios';

const URL = (process.env.REACT_APP_BACKEND_API_URL || Config.API_URL);
const instance = axios.create({
    baseURL: URL
});

//instance.defaults.headers.common['_institution_id'] = Config.INSTITUTION_ID;

export default instance;



