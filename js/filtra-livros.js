// ---------- Funções ----------

function filtraLivroTema(livros, tipoFiltro) {
    const resultadoFiltro = livros.filter(livro => livro.categoria === tipoFiltro);

    resultadoFiltro.forEach(() => {
        adicionaElementos(resultadoFiltro);
    });
};

function filtraLivroQuantidade(livros) {
    const resultadoFiltro = livros.filter(livro => livro.quantidade > 0);
    
    resultadoFiltro.forEach(() => {
        adicionaElementos(resultadoFiltro);
    });

    filtroAplicado = resultadoFiltro;
}

// ---------- Lógica ----------
let filtroAplicado = '';

botoesFiltro.forEach(botao => {
        
    botao.addEventListener('click', evento => {
        const tipoFiltro = evento.target.value;
        const categoria = ['front-end', 'back-end', 'dados'];

        if (tipoFiltro === 'quantidade') {
            filtraLivroQuantidade(livros);
        };
        
        if (categoria.includes(tipoFiltro) && filtroAplicado.length == ''){
            filtraLivroTema(livros, tipoFiltro);
        };

        if (categoria.includes(tipoFiltro) && filtroAplicado.length > 0) {
            filtraLivroTema(filtroAplicado, tipoFiltro);
        };

        if (tipoFiltro === 'ordenacao' && filtroAplicado.length == '') {
            const livrosOrdenados = ordenaPrecosCrescentes(livros);
            adicionaElementos(livrosOrdenados);
            filtroAplicado = livrosOrdenados;
        };
    
        if (tipoFiltro === 'ordenacao' && filtroAplicado.length > 0) {
            const livrosOrdenados = ordenaPrecosCrescentes(filtroAplicado);
            adicionaElementos(livrosOrdenados);
            filtroAplicado = livrosOrdenados;
        };

        if (tipoFiltro === 'remover') {
            adicionaElementos(livros);
            filtroAplicado = '';
        };
    });
});
