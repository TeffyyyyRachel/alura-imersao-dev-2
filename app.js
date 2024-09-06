let section = document.getElementById("resultados-pesquisa");
let botao = document.getElementById("botao")

botao.addEventListener("click", () => {
    let resultados = "";

    for (let dado of mangas) {
    resultados += `
        
    `
    console.log(dado);
    
}

section.innerHTML = resultados
})