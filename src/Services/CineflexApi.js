import axios from "axios";

export function getMovies(){
    const promisse = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
    return promisse;
}