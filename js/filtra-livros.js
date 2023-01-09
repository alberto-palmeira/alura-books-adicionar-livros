// ---------- Funções ----------

function filtraLivroTema(livros, tipoFiltro) {
    const resultadoFiltro = livros.filter(livro => livro.categoria === tipoFiltro);

    adicionaElementos(resultadoFiltro);
};

function filtraLivroQuantidade(livros) {
    const resultadoFiltro = livros.filter(livro => livro.quantidade > 0);
    
    adicionaElementos(resultadoFiltro);

    listaLivrosFiltroAplicado = resultadoFiltro;
};

function calculaValorLivrosDisponiveis (livros) {
    const valorInicial = 0;
    return livros.reduce((acumulador, valorAtual) => { 
        return acumulador + valorAtual.preco
    }, valorInicial);
};

function aplicaFiltroQuantidade(listaLivros) {
        filtraLivroQuantidade(listaLivros);

        const valorTotalLivrosDisponiveis = calculaValorLivrosDisponiveis(listaLivrosFiltroAplicado).toFixed(2);

        elementoValorTotalDosLivrosDisponiveis.innerHTML = `
            <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotalLivrosDisponiveis}</span></p>
            </div>
            `;
};

function aplicaFiltroPreco(listaLivros) {
    const livrosOrdenadosPreco = ordenaPrecosCrescentes(listaLivros);
    adicionaElementos(livrosOrdenadosPreco);
    listaLivrosFiltroAplicado = livrosOrdenadosPreco;
};

// ---------- Lógica ----------
let listaLivrosFiltroAplicado = '';
const botoesFiltro = document.querySelectorAll('.btn');
const elementoValorTotalDosLivrosDisponiveis = document.querySelector('#valor_total_livros_disponiveis');

botoesFiltro.forEach(botao => {
        
    botao.addEventListener('click', evento => {
        const tipoFiltro = evento.target.value;
        const categoria = ['front-end', 'back-end', 'dados'];

        if (tipoFiltro === 'quantidade' && listaLivrosFiltroAplicado.length == '') {
            aplicaFiltroQuantidade(livros);
        } else if (tipoFiltro === 'quantidade' && listaLivrosFiltroAplicado.length > 0) {
            aplicaFiltroQuantidade(listaLivrosFiltroAplicado);
        } else {
            elementoValorTotalDosLivrosDisponiveis.innerHTML = '';
        };
        
        if (categoria.includes(tipoFiltro) && listaLivrosFiltroAplicado.length == '') {
            filtraLivroTema(livros, tipoFiltro);
        };
    
        if (categoria.includes(tipoFiltro) && listaLivrosFiltroAplicado.length > 0) {
            filtraLivroTema(listaLivrosFiltroAplicado, tipoFiltro);
        };
        
        if (tipoFiltro === 'ordenacao' && listaLivrosFiltroAplicado.length == '') {
            aplicaFiltroPreco(livros);
        };

        if (tipoFiltro === 'ordenacao' && listaLivrosFiltroAplicado.length > 0) {
            aplicaFiltroPreco(listaLivrosFiltroAplicado);
        };
        
        if (tipoFiltro === 'remover') {
            adicionaElementos(livros);
            listaLivrosFiltroAplicado = '';
        };
    });
});
