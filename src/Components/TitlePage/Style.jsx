import styled from "styled-components"

export const TitleContainer = styled.header`
    
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${props => props.top}px;
    margin-bottom: ${props => props.bot}px;

    h2{

        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight:${props => props.fontWeight};
        font-size: 24px;
        
        color: ${props => props.color};
    }
`
