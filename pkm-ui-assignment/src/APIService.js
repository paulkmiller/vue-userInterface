import axios from 'axios';
const API_URL = 'http://localhost:8005';

export class APIService{

    getUsers(dataSource) {
        const url = `${API_URL}/api/systemusers/`;
        dataSource.users = []
        return axios.get(url).then((response) => {
            // load the API response into items for the datatable
            console.log(dataSource);
            dataSource.users = response.data.results.map((user) => {
                return {
                    id: user.id,
                    name: user.firstname + user.lastname,
                    description: user.description,
                    email: user.email
                    
                    // ...user.fields
                }
            })
            dataSource.numberOfUsers = response.count
        }).catch((error) => {
            console.log(error);
        })
    }

    getUser(id) {
        const url = `${API_URL}/api/systemusers/${id}`;
        return axios.get(url).then(response => response.data.results);
    }

}