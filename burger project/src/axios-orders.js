import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-c39c4-default-rtdb.firebaseio.com/'
});

export default instance;