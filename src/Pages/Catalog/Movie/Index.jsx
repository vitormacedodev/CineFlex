import { MovieBox } from "./Style"

export default function Movie(props){
    return(
        <>
            <MovieBox>
                <img src={props.posterURL} alt={props.title} />
            </MovieBox>
        </>
    )
}