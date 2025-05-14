import Banner from "./components/banner";
import FormaDeBolo from "./components/FormaDeBolo";
import Header from "./components/header";
import { Componente1,  Componente2 } from "./components/VariosComponents";

const App = () => {
  return ( 
    // Parte visivel do cmponente
    <>
      {/* <Header />
      <Banner />
      <Componente1 />
      <Componente2 /> */}
      <FormaDeBolo sabor = "laranja" cobertura = "Morango" />
      <FormaDeBolo sabor = "Chocolate" cobertura = "Chantily" />
      <FormaDeBolo sabor = "frango" cobertura = "xadrez" />
    </>
   );
}
 
export default App;