import { MovieBox } from "./Style"
import { useNavigate } from "react-router-dom"

export default function Movie({title, movieID, posterURL}){
    const navigate = useNavigate();
    return(
        <>
            <MovieBox onClick={()=>navigate(`/sessions/${movieID}`)}>
                <img src={posterURL} alt={title} />
            </MovieBox>
        </>
    )
}