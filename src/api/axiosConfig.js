import axios from 'axios';

export default axios.create({
    baseURL:'https://4a64-41-228-243-171.eu.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"}
});