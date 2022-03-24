import axios from "axios";

export function getMovies(){
    const promisse = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
    return promisse;
}

export function getSessions(movieID){
    const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`);
    return promisse;
}