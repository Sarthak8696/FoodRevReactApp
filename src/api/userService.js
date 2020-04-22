import axios from 'axios';

export default axios.create({
    baseURL: '//localhost:8762/registration-service/users',
})