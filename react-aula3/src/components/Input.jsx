const Input = () => {
  function mostrarNome() {
    console.log(nome.value);
  }
  return (
    <>
      <input 
        type="text" 
        id="nome"   
        placeholder="Digite seu Nome"
      />
      <button onClick={mostrarNome}>Mostrar</button>
    </>
  );
};

export default Input;
