import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://vikramwrites.herokuapp.com/api/",
})