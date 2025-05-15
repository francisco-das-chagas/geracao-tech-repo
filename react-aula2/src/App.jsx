import Banner from "./components/banner";
import Card from "./components/Card";
import CardDinamico from "./components/CardDinamico";
import FormaDeBolo from "./components/FormaDeBolo";
import Header from "./components/header";
import { Componente1,  Componente2 } from "./components/VariosComponents";

const App = () => {
  return ( 
    // Parte visivel do cmponente
    <>
      <Card 
        image={"https://sesies.com.br/wp-content/uploads/2023/02/GettyImages-497811221-1024x681.jpg"}
        title={"Noticia 1"} 
        category={"Esportes"} 
        paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aliquam magni dolorum excepturi. At, error et repellendus dicta sunt nesciunt blanditiis, ab rem explicabo aliquam, pariatur magnam ullam dolorum praesentium."}
        tipo={"A"}
      />
      <Card 
        image={"https://sesies.com.br/wp-content/uploads/2023/02/GettyImages-497811221-1024x681.jpg"}
        title={"Noticia 2"} 
        category={"Finanças e Investimento"} 
        paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aliquam magni dolorum excepturi. At, error et repellendus dicta sunt nesciunt blanditiis, ab rem explicabo aliquam, pariatur magnam ullam dolorum praesentium."}
        tipo={"B"}
      />
      <Card 
        image={"https://sesies.com.br/wp-content/uploads/2023/02/GettyImages-497811221-1024x681.jpg"}
        title={"Noticia 3"} 
        category={"Culinária"} 
        paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aliquam magni dolorum excepturi. At, error et repellendus dicta sunt nesciunt blanditiis, ab rem explicabo aliquam, pariatur magnam ullam dolorum praesentium."}
        tipo={"C"}
      />
      <CardDinamico>
        <h1>Noticia 4</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsLjXFUZj-jZdd_sQnlNblsK6raz6t19ZsAg&s" alt="" />
        <h6>Categoria</h6>
      </CardDinamico>
    </>
   );

}

 
export default App;

