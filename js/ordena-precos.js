// ---------- Funções ----------

function ordenaPrecosCrescentes (livros) {
    const livrosParaOrdenar = [...livros];
    const livrosOrdenados = livrosParaOrdenar.sort((a,b) => a.preco - b.preco);
    return livrosOrdenados;
};
