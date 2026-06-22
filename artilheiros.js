function renderizarPaginaArtilheiros() {
  const lista = document.getElementById("lista-artilheiros-historicos");
  if (!lista) return;

  // Proteção caso o arquivo dados.js falhe ou mude de nome
  if (typeof artilheirosHistoricos === 'undefined') {
    lista.innerHTML = "<li class='item-artilheiro' style='color: #d9534f;'>Erro: Dados não encontrados. Verifique o arquivo dados.js</li>";
    return;
  }

  lista.innerHTML = "";

  artilheirosHistoricos.forEach((artilheiro, index) => {
    let corGols = "#ccc";
    let prefixo = "⚽";
    let classeDestaque = "";
    
    // Define as cores e medalhas do pódio (Top 3)
    if (index === 0) { corGols = "#f7dd43"; prefixo = "🥇"; classeDestaque = "artilheiro-destaque"; }
    else if (index === 1) { corGols = "#d1d1d1"; prefixo = "🥈"; classeDestaque = "artilheiro-destaque"; }
    else if (index === 2) { corGols = "#e5a93b"; prefixo = "🥉"; classeDestaque = "artilheiro-destaque"; }

    lista.innerHTML += `
      <li class="item-artilheiro">
        <div class="artilheiro-info-esquerda">
          <span class="artilheiro-prefixo">${prefixo}</span>
          <img src="https://flagcdn.com/w20/${artilheiro.flag}.png" class="artilheiro-bandeira" alt="${artilheiro.selecao}">
          <span class="artilheiro-nome ${classeDestaque}">${artilheiro.nome}</span>
        </div>
        <strong class="artilheiro-gols" style="color: ${corGols};">${artilheiro.gols} gols</strong>
      </li>
    `;
  });
}

// Inicialização segura para garantir que roda assim que o HTML carregar
if (document.readyState === "complete" || document.readyState === "interactive") {
  renderizarPaginaArtilheiros();
} else {
  document.addEventListener("DOMContentLoaded", renderizarPaginaArtilheiros);
}