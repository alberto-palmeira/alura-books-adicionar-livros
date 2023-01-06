// ---------- Funções ----------

async function getBuscarLivrosEndPoint () {
    const resposta = await fetch(endPointApi);
    const livros = await resposta.json();
    const livrosComDesconto = aplicaDesconto(livros);
    
    livrosComDesconto.forEach(elemento => {
        adicionaElementos(elemento)
    });
}

function adicionaElementos(elemento) {
    secaoLivros.innerHTML +=
        `<div class="livro">
            <img class="livro__imagens" src="${elemento.imagem}" alt="${elemento.alt}" />
            <h2 class="livro__titulo">
            ${elemento.titulo}
            </h2>
            <p class="livro__descricao">${elemento.autor}</p>
            <p class="livro__preco" id="preco">${elemento.preco.toFixed(2)}</p>
            <div class="tags">
            <span class="tag">${elemento.categoria}</span>
            </div>
        </div>`
};

function aplicaDesconto(livros) {
    const desconto = 0.3;
    const livrosComDesconto = livros.map(elemento => {
        return {...elemento, preco: elemento.preco - (elemento.preco * desconto)} 
    });

    return livrosComDesconto;
};

// ---------- Lógica ----------

const endPointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
let livros = getBuscarLivrosEndPoint();

const secaoLivros = document.querySelector('#livros');
