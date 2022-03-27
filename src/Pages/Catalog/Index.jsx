import { useEffect, useState } from "react";
import TitlePage from "../../Components/TitlePage/Index";
import { CatalogContainer } from "./Style";
import Movie from "./Movie/Index";
import { getMovies } from "../../Services/CineflexApi";

export default function Catalog(){
    const [movies, setMovies] = useState(null);

    useEffect(()=>{
        const promisse = getMovies();
        promisse.then((moviesApi => setMovies(moviesApi.data)));
    },[]);

    if(movies===null){
        return("Loading...")
    }

    return(
        <main>
            <TitlePage color="#293845" title="Selecione o filme" fontWeight={400} top={35} bot={35}/>
            <CatalogContainer>
               {
                   movies.map((movie, index)=>
                        (
                        <Movie posterURL={movie.posterURL} movieID={movie.id} title={movie.title} key={index} />
                        )
                    )
               }
            </CatalogContainer>
        </main>
    )
}