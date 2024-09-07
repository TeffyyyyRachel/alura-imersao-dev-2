let section = document.getElementById("conteudo-pesquisado");
let botao = document.getElementById("botao-pesquisa")

botao.addEventListener("click", () => {
    let resultados = "";

    for (let dado of mangas) {
    resultados += `
        <div class="conteudo">
            <div class="imagem">
                <img src="${dado.capa}" alt="${dado.alt}" class="capa-manga">
            </div>
            <div class="informacoes">
                <h2 class="titulo">${dado.titulo}</h2>
                <p class="sinopse">${dado.descricao}</p>
                <div class="info-outro">
                    <div class="autoria">
                        <div id="escritor"> Escritor: ${dado.escritor}</div>
                        <div id="desenhista">Desenhista: ${dado.desenhista}</div>
                    </div>
                    <a href="${dado.link}" class="link-infos">Link para mais informações</a>
                </div>
            </div>
        </div>
    `
    console.log(dado);
    
}

section.innerHTML = resultados
})