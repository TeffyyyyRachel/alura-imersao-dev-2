let section = document.getElementById("conteudo-pesquisado");
let botao = document.getElementById("botao-pesquisa");

botao.addEventListener("click", () => {

    let resultados = ""; // Vai receber o bloco com as informações dos dados organizadas
    
    let barraPesquisa = document
        .getElementById("barra-pesquisa")
        .value
        .trim();
    // Recebe o que foi pesquisado na barra de pesquisa
        
    for (let dado of mangas) {

        if (!barraPesquisa) { //Não mostra nada se a barraPesquisa estiver vazia
            resultados = "<p class='nada-encontrado'>Escreva algo na caixa de pesquisa antes de pesquisar</p>"
        }

        else if (dado.titulo.toLowerCase().includes(barraPesquisa) || 
        dado.descricao.toLowerCase().includes(barraPesquisa) ||
        dado.tags.toLowerCase().includes(barraPesquisa) ||
        dado.escritor.toLowerCase().includes(barraPesquisa) ||
        dado.desenhista.toLowerCase().includes(barraPesquisa)) { // Testando se o que foi pesquisado em barraPesquisa existe em alguma parte dos dados
            
            // Se existir, resultados organiza isso em uma div estruturada para ser mostrada
            resultados += `
            <div class="conteudo">
            <div class="imagem">
            <img src="${dado.capa}" alt="${dado.alt}" class="capa-manga">
            </div>
            <div class="informacoes">
            <h2 class="titulo">${dado.titulo} <span class="publicacao">(${dado.publicacao})</span></h2>
            <p class="sinopse">${dado.descricao}</p>
            <div class="info-outro">
            <div class="autoria">
            <div id="escritor"> Escrito por: ${dado.escritor}</div>
            <div id="desenhista">Desenhista: ${dado.desenhista}</div>
            </div>
            <a href="${dado.link}" class="link-infos" target="_blank">Link para mais informações</a>
            </div>
            </div>
            </div>
            `
            
        }

    }
    
    if (resultados == "") {
        resultados = "<p class='nada-encontrado'>Nada foi encontrado. Verifique a sua digitação.</p>"
    }

    section.innerHTML = resultados

})