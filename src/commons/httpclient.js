import axios from "axios";

export default axios.create({
    baseURL: 'https://backend-myfirstreact.herokuapp.com/api/v1/employeess',
    headers:{
        'Conent-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'

    }
})