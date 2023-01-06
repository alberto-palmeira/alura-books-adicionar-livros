// ---------- Funções ----------

function aplicaDesconto(livros) {
    const desconto = 0.3;
    const livrosComDesconto = livros.map(elemento => {
        return {...elemento, preco: elemento.preco - (elemento.preco * desconto)} 
    });

    return livrosComDesconto;
};