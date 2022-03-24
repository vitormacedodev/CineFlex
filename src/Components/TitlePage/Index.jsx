import styled from "styled-components";

export default function TitlePage({fontWeight, color, title, top, bot}){
    return(
        <>
            <TitleContainer fontWeight={fontWeight} color={color} top={top} bot={bot}>
                <h2>{title}</h2>
            </TitleContainer>
        </>
    )
}

const TitleContainer = styled.header`
    
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${props => props.top}px;
    margin-bottom: ${props => props.bot}px;

    h2{

        font-family: 'Roboto';
        font-style: normal;
        font-weight:${props=>props.fontWeight}px;
        font-size: 24px;
        
        color: ${props => props.color};
    }
`
