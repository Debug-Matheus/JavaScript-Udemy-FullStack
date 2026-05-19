fetch('http://127.0.0.1:3000/aula91/pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementosNaPagina(json))

//FETCH usa no navegador a requisição FETCH
function carregaElementosNaPagina(json) {
  /*console.log(pessoaMaior)
  const listaComIds = json.map((value,index)=>{
    return{
      id: index,
      nome: value.nome
    }
  })
  console.log(listaComIds)*/

  /*for(let i = 0; i < json.length; i++){
    json[i].id = i
  }
  console.log(json)*/
  const novasPessoas = new Map();
  // O .entries() no array nos dá o [índice, valor] de cada item
  for (const [index, pessoa] of json.entries()) {
    // A chave do Map passa a ser o índice (0, 1, 2...)
    novasPessoas.set(index, {
      idOrdem: index,
      ...pessoa
    });
  }
  console.log(novasPessoas)
}