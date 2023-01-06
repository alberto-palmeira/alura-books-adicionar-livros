// ---------- Funções ----------

async function getBuscarLivrosEndPoint () {
    const resposta = await fetch(endPointApi);
    livros = await resposta.json();
    livros = aplicaDesconto(livros);
    adicionaElementos(livros);

    botoesFiltro.forEach(botao => {
        
        botao.addEventListener('click', evento => {
            const categoria = evento.target.value;
            
            if (categoria != 'remover'){
                filtraLivro(livros, categoria);
            } else {
                adicionaElementos(livros);
            }

        });
    });
};

// ---------- Lógica ----------

let livros = [];
const endPointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosEndPoint();
const botoesFiltro = document.querySelectorAll('.btn');
const removerFiltro = document.querySelector('body');
