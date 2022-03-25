import { useNavigate } from "react-router-dom"
import styled from "styled-components"


export default function Showtimes({time, sessionID}){
    const navigate = useNavigate();

    return(
        <>
            <Hours onClick={() => navigate(`/seats/${sessionID}`)}>
                    <h5>{time}</h5>
            </Hours>
        </>
    )
}

const Hours = styled.div` 
        background-color: #E8833A;
        border-radius: 3px;
        width: 83px;
        height: 43px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 28px;
        margin-top: 28px;

        h5{
            font-family: 'Roboto', sans-serif;
            font-size: 21px;
            color: #FFFFFF;
            font-weight: 300;
        }
    

`