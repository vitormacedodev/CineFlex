import styled from "styled-components"

export const SeatsContainer = styled.section`
    width: 375px;
    padding: 0 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 17px 7px;
`

export const LegendBox = styled.div`
    height: 90px;
    width: 100%;
    margin-top: 14px;
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 35px;
    
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        color: #4E5A65;
        gap: 5px;
    }
`
export const LegendSelect = styled.div`
    width: 24px;
    height: 24px;

    background: #8DD7CF;
    border: 1px solid #1AAE9E;
    box-sizing: border-box;
    border-radius: 17px;
`
export const LegendUnavailable = styled.div`
    width: 24px;
    height: 24px;

    background: #FBE192;
    border: 1px solid #F7C52B;
    box-sizing: border-box;
    border-radius: 17px;
`
export const LegendAvailable = styled.div`
    width: 24px;
    height: 24px;

    background: #C3CFD9;
    border: 1px solid #7B8B99;
    box-sizing: border-box;
    border-radius: 17px;
`