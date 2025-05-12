import Banner from "./components/banner";
import Header from "./components/header";
import { Componente1,  Componente2 } from "./components/VariosComponents";

const App = () => {
  return ( 
    // Parte visivel do cmponente
    <>
      <Header />
      <Banner />
      <Componente1 />
      <Componente2 />
    </>
   );
}
 
export default App;