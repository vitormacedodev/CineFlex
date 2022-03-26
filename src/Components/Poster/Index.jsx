import styled from "styled-components"

export default function Poster({title, posterURL, weekday, showtime}){
    return(
        <>
            <PosterBox>
                <PosterDiv>
                    <img src={posterURL} alt={title} />
                </PosterDiv>
                <SessionInfo>
                    <h3>{title}</h3>
                    {(weekday&&showtime) && <h3>{weekday} - {showtime}</h3>}
                </SessionInfo>
            </PosterBox>
        </>
    )
}

const PosterBox = styled.footer`
    height: 117px;
    width: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 14px;
    position: fixed;
    bottom: 0;
    background-color: #9EADBA;;
    border: 1px solid #9EADBA;

`

const PosterDiv = styled.div`
    width: 64px;
    height: 89px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;

    img{
        width: 48px;
        height: 72px;
    }
`

const SessionInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 7px;
    
    h3{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        color: #293845;
    }   
`