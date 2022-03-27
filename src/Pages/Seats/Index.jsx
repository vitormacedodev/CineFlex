import { useParams } from "react-router-dom";
import { useState, useEffect} from "react/";

import { getSeats } from "../../Services/CineflexApi";
import Poster from "../../Components/Poster/Index";
import TitlePage from "../../Components/TitlePage/Index";
import Seat from "./Seat/Index";
import { LegendAvailable, LegendBox, LegendSelect, LegendUnavailable, SeatsContainer } from "./Style";


export default function Seats() {
    const {sessionID} = useParams();
    const [seats, setSeats] = useState(null);

    useEffect(() => {
        const promisse = getSeats(sessionID);
        promisse.then(response => setSeats(response.data))
    }, [sessionID])

    if(seats===null){
        return ("Loading...");
    }

    return (
        <main>
            <TitlePage color="#293845" title="Selecione o(s) assento(s)" fontWeight={400} top={35} bot={27} />
            <SeatsContainer>
                {
                    seats.seats.map((seat, index) => 
                        <Seat {...seat}/>
                    )   
                }
            </SeatsContainer>
            <LegendBox>
                <div><LegendSelect /><h5>Selecionado</h5></div>
                <div><LegendAvailable/><h5>Disponível</h5></div>
                <div><LegendUnavailable /><h5>Indisponível</h5></div>
            </LegendBox>
            <Poster 
                title={seats.movie.title} 
                posterURL={seats.movie.posterURL} 
                weekday={seats.day.weekday} 
                showtime={seats.day.date} 
            />
        </main>
    )
}