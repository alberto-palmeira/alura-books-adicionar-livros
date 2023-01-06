// ---------- Funções ----------

function filtraLivro(livros, categoria) {
    const resultadoFiltro = livros.filter(livro => livro.categoria === categoria);

    resultadoFiltro.forEach(livro => {
        adicionaElementos(resultadoFiltro);
    });
};
