import axios from 'axios';
const API_URL = 'http://localhost:8005';

export class APIService{

    getUsers() {
        const url = `${API_URL}/api/systemusers/`;
        return axios.get(url).then(response => response.data.results);
    }

    getUser(id) {
        const url = `${API_URL}/api/systemusers/${id}`;
        return axios.get(url).then(response => response.data.results);
    }

}