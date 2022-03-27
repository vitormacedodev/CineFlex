import styled from "styled-components";

export default function Seat({ id, name, isAvailable}){
    return(
        <>
            <SeatBox>
                <p>{name}</p>
            </SeatBox>
        </>
    )
}

const SeatBox = styled.div`
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #7B8B99;
    box-sizing: border-box;
    border-radius: 17px;
    background-color: #C3CFD9;

    p{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
    }
`