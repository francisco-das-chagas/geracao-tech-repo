import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

const Paths = () => {
  return ( 
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
   );
}
 
export default Paths;