import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <>
        <h1>Página Não Encontrada</h1>
        <Link to={"/"}>Voltar</Link>
    </>
   );
}
 
export default NotFound;