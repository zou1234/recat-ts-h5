import axios from "axios";

const httpInstance = axios.create({
    baseURL: "http://localhost:8089/",
    timeout: 5000
})

httpInstance.interceptors.request.use((config) => {
   return config

}, (error)=> {
    return Promise.reject(error)
})


httpInstance.interceptors.response.use((response) => {
    return response

}, (error)=> {
    return Promise.reject(error)
})

export {
    httpInstance
}