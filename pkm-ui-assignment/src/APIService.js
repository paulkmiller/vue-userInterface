import axios from 'axios';
const API_URL = 'http://localhost:8005';

export class APIService{

    getUsers() {
        const url = `${API_URL}/api/systemusers/`;
        this.users = []
        return axios.get(url).then((response) => {
            // load the API response into items for the datatable
            this.users = response.data.results.map((user)=> {
                return {
                    id: user.id,
                    name: user.firstname + user.lastname,
                    description: user.description,
                    email: user.email
                }
            }).catch((error) => {
                console.log(error);
            })
        });
    }

    getUser(id) {
        const url = `${API_URL}/api/systemusers/${id}`;
        return axios.get(url).then(response => response.data.results);
    }

}