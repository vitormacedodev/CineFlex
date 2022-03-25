import styled from "styled-components"

export default function Poster({title, posterURL}){
    return(
        <>
            <PosterBox>
                <h1></h1>
            </PosterBox>
        </>
    )
}

const PosterBox = styled.footer`
    height: 117px;
    
    position: fixed;
    bottom: 0;

    background-color: #DFE6ED;
;

`