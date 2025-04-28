// // Funções são trecho de códigos repetiveis que pode ou não ter parâmetros e pode ou não ter retorno nem toda função vai precisar ter retorno

// function boasVindas(nome) {
//   document.write(`<h1>Olá ${nome}</h1>`);
// }
// boasVindas('Gleidson');
// boasVindas('Márcio');
// boasVindas('Alessandro');
// boasVindas('Sarah');

function somar(numero1, numero2) {
  // document.write(`<h1>A soma é: ${numero1 + numero2} </h1>`)
  console.log(numero1 + numero2)
  return numero1 + numero2
}
somar(10002, 121212)
somar(65, 13)

document.write(`<h1>O resultado é: ${somar(1,1)}</h1>`)