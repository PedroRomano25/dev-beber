import axios from "axios";

export const axiosAppServer = axios.create({
    baseURL: "https://www.thecocktaildb.com",
    timeout: 15000,
});