import axios from 'axios';

export const BACKEND_URL = 'http://localhost:8001/api';

const apiCaller = axios.create({
    baseURL: BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiCaller;
