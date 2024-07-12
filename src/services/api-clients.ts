import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4e8adea5270c4dd29a987cdf4a076f3f'
    }
});