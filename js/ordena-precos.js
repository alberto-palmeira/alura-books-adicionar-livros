// ---------- Funções ----------

function ordenaPrecosCrescentes (livros) {
    const livrosParaOrdenar = [...livros];
    const livrosOrdenados = livrosParaOrdenar.sort((a,b) => a.preco - b.preco);
    return livrosOrdenados;
};

function ordenaPrecosDecrescentes (livros) {
    const livrosOrdenados = livros.sort((a,b) => b.preco - a.preco);
    return livrosOrdenados;
};
