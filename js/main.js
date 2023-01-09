// ---------- Funções ----------

async function getBuscarLivrosEndPoint () {
    const resposta = await fetch(endPointApi);
    livros = await resposta.json();
    livros = aplicaDesconto(livros);
    
    adicionaElementos(livros);
};

// ---------- Lógica ----------

let livros = [];
const endPointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosEndPoint();
