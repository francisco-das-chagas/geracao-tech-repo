import Banner from "./components/banner";
import Card from "./components/Card";
import FormaDeBolo from "./components/FormaDeBolo";
import Header from "./components/header";
import { Componente1,  Componente2 } from "./components/VariosComponents";

const App = () => {
  return ( 
    // Parte visivel do cmponente
    <>
      <Card 
        title={"Noticia 1"} 
        category = {"Esportes"} 
        paragraph= {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reprehenderit unde rerum corporis omnis nobis natus consectetur provident rem nam dolorum eos delectus obcaecati, ducimus temporibus doloribus molestiae, totam impedit."}
      />
    </>
   );

}
 
export default App;

