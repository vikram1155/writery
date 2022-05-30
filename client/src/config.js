import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://writerymern.herokuapp.com/api/"
})