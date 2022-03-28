import axios from "axios";

export function getMovies(){
    const promisse = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
    return promisse;
}

export function getSessions(movieID){
    const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`);
    return promisse;
}

export function getSeats(sessionID){
    const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`);
    return promisse;
}

export function postData(data){
    const promisse = axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, data);
    return promisse;
}