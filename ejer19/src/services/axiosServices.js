import APIRequest from "../utils/config/axios.config";


export function getRandomJoke(){
    return APIRequest.get('/')
}