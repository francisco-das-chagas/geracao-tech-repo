import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Produtos from "../../pages/Produtos";
import PageLayout from "../layouts/PageLayout";

const Paths = () => {
  return ( 
    <>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<PageLayout />}>
                <Route index element={<Home/>}/>
                <Route path="/produtos" element={<Produtos/>}/>
              </Route>
            </Routes>
        </BrowserRouter>
    </>
   );
}
 
export default Paths;