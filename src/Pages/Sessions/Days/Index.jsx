import styled from "styled-components"
import Showtimes from "../Showtimes/Index"

export default function Days({id, weekday, date, showtimes}){
    return(
        <>
            <Day>
                <div>
                    <h2>{weekday} - {date}</h2>
                </div>
                <Times>
                {
                    showtimes.map((time, index)=>
                        <Showtimes key={index} time={time.name} sessionID={time.id}/>
                    )
                } 
                </Times>
            </Day>

        </>
    )
}

const Day = styled.section`
    display: flex;
    flex-direction: column;
    gap: 7px 7px;

    padding: 0 25px;

    h2{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
    }
`

const Times = styled.div`
    display: flex;
    gap: 7px;

`