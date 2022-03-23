import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./Pages/Catalog/Index";
import Sessions from "./Pages/Sessions/Index";
import Seats from "./Pages/Seats/Index";
import Success from "./Pages/Success/Index";

export default function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Catalog />} />
                    <Route path="/sessions/:movieID" element={<Sessions />} />
                    <Route path="/sessions/:sessionID" element={<Seats />} />
                    <Route path="/success" element={<Success />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}