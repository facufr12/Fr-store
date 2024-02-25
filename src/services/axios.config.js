import axios from "axios";

const URL = 'https://65dab1f7bcc50200fcdd16d7.mockapi.io/api/stockproducts'

export const axiosInstance = axios.create ({
    baseURL: URL
})