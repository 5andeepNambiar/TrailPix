import axios from 'axios';

export default axios.create({
    baseURL:'https://4292-117-193-85-247.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});