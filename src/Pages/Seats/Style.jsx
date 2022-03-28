import styled from "styled-components"

export const SeatsContainer = styled.section`
    width: 375px;
    padding: 0 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 17px 7px;

    margin-left: auto;
    margin-right: auto;
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

export const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 7px;

    input{
        font-size: 18px;
        width: 327px;
        height: 51px;
        padding: 7px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }

    input::placeholder{
        font-family: 'Roboto', sans-serif;
        font-style: italic;
        font-size: 18px;
        color:#AFAFAF
    } 

    button{
        margin-top: 28px;
        font-size: 18px;
        color: #FFFFFF;
        border: none;
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
    }

    div{
        width: 327px;
        display: flex;
        justify-content: start;

        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
    }
    
`
