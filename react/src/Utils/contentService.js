import axios from 'axios';
import { getCurrentUser, authHeader } from './Service';

const serviceUrl = 'http://localhost:8080';

export const getTasks = () => {
    return axios.get(`${serviceUrl}/api/users/${ getCurrentUser().id }/tasks`, {
        headers: authHeader()
    });
}
