import styled from 'styled-components';

export default function Header(){
    return(
        <>
            <TitleHeader>
                <h1>CINEFLEX</h1>
            </TitleHeader>
        </>
    )
}

const TitleHeader = styled.header`
    height: 67px;
    font-family: 'Roboto', sans-serif;
    background-color: #C3CFD9;
    
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        color: #E8833A;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
    }

`