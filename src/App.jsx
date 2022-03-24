import { BrowserRouter, Route, Routes } from "react-router-dom";

import Catalog from "./Pages/Catalog/Index";
import Sessions from "./Pages/Sessions/Index";
import Seats from "./Pages/Seats/Index";
import Success from "./Pages/Success/Index";
import Header from "./Components/Header/Index";

export default function App(){
    return(
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Catalog />} />
                    <Route path="/sessions/:movieID" element={<Sessions />} />
                    <Route path="/seats/:sessionID" element={<Seats />} />
                    <Route path="/sunsccess" element={<Success />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}