import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import TitlePage from "../../Components/TitlePage/Index"
import { getSessions } from "../../Services/CineflexApi";

export default function Sessions(){
    const [showtimes, setShowtimes] = useState(null);
    const {movieID} = useParams();

    useEffect(()=>{
        const promisse = getSessions(movieID);
        promisse.then(showtimesApi=>setShowtimes(showtimesApi.data))
    }, [movieID])

    if(showtimes===null){
        return('Loading');
    }

    return(
        <>
            <TitlePage color="#293845" title="Selecione a Sessão" fontWeight={400} top={35} bot={35} />
        </> 
    )
}