// function renderizarPaginaArtilheiros() {
//   const lista = document.getElementById("lista-artilheiros-historicos");
//   if (!lista) return;

//   // Proteção caso o arquivo dados.js falhe ou mude de nome
//   if (typeof artilheirosHistoricos === 'undefined') {
//     lista.innerHTML = "<li class='item-artilheiro' style='color: #d9534f;'>Erro: Dados não encontrados. Verifique o arquivo dados.js</li>";
//     return;
//   }

//   lista.innerHTML = "";

//   artilheirosHistoricos.forEach((artilheiro, index) => {
//     let corGols = "#ccc";
//     let prefixo = "⚽";
//     let classeDestaque = "";
    
//     // Define as cores e medalhas do pódio (Top 3)
//     if (index === 0) { corGols = "#f7dd43"; prefixo = "🥇"; classeDestaque = "artilheiro-destaque"; }
//     else if (index === 1) { corGols = "#d1d1d1"; prefixo = "🥈"; classeDestaque = "artilheiro-destaque"; }
//     else if (index === 2) { corGols = "#e5a93b"; prefixo = "🥉"; classeDestaque = "artilheiro-destaque"; }

//     lista.innerHTML += `
//       <li class="item-artilheiro">
//         <div class="artilheiro-info-esquerda">
//           <span class="artilheiro-prefixo">${prefixo}</span>
//           <img src="https://flagcdn.com/w20/${artilheiro.flag}.png" class="artilheiro-bandeira" alt="${artilheiro.selecao}">
//           <span class="artilheiro-nome ${classeDestaque}">${artilheiro.nome}</span>
//         </div>
//         <strong class="artilheiro-gols" style="color: ${corGols};">${artilheiro.gols} gols</strong>
//       </li>
//     `;
//   });
// }

function renderizarPaginaArtilheiros() {
  const lista = document.getElementById("lista-artilheiros-historicos");
  if (!lista) return;

  // Proteção caso o arquivo dados.js falhe ou mude de nome
  if (typeof artilheirosHistoricos === 'undefined') {
    lista.innerHTML = "<li class='item-artilheiro' style='color: #d9534f;'>Erro: Dados não encontrados. Verifique o arquivo dados.js</li>";
    return;
  }

  // Iniciamos a string vazia para construir o HTML completo
  let htmlCompleto = "";

  /* ================= 1. HISTÓRICO EXPANDIDO COM VICES E TERCEIROS ================= */
  htmlCompleto += `
    <div style="background: #1e293b; padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #334155; font-family: sans-serif;">
      <h3 style="color: #fff; margin-top: 0; text-align: center; font-size: 14px; text-transform: uppercase; border-bottom: 1px solid #334155; padding-bottom: 8px; margin-bottom: 12px;">📜 Histórico de Pódios Recentes</h3>
            <div style="display: flex; flex-direction: column; gap: 8px; font-size: 13px;">
        <!-- 2026 -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: #0f172a; padding: 8px 12px; border-radius: 6px; border: 1px solid #1e293b;">
          <strong style="color: #94a3b8; width: 40px;">2026</strong>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/" alt=""> <span style="color: #f7dd43; font-weight: bold;">🥇 </span></div>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/" alt=""> <span style="color: #d1d1d1;">🥈 </span></div>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/" alt=""> <span style="color: #e5a93b;">🥉 </span></div>
        </div>
      <div style="display: flex; flex-direction: column; gap: 8px; font-size: 13px;">
        <!-- 2022 -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: #0f172a; padding: 8px 12px; border-radius: 6px; border: 1px solid #1e293b;">
          <strong style="color: #94a3b8; width: 40px;">2022</strong>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/ar.png" alt="AR"> <span style="color: #f7dd43; font-weight: bold;">🥇 ARG</span></div>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/fr.png" alt="FR"> <span style="color: #d1d1d1;">🥈 FRA</span></div>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/hr.png" alt="CR"> <span style="color: #e5a93b;">🥉 CRO</span></div>
        </div>
        <!-- 2018 -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: #0f172a; padding: 8px 12px; border-radius: 6px; border: 1px solid #1e293b;">
          <strong style="color: #94a3b8; width: 40px;">2018</strong>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/fr.png" alt="FR"> <span style="color: #f7dd43; font-weight: bold;">🥇 FRA</span></div>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/hr.png" alt="CR"> <span style="color: #d1d1d1;">🥈 CRO</span></div>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/be.png" alt="BE"> <span style="color: #e5a93b;">🥉 BEL</span></div>
        </div>
        <!-- 2014 -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: #0f172a; padding: 8px 12px; border-radius: 6px; border: 1px solid #1e293b;">
          <strong style="color: #94a3b8; width: 40px;">2014</strong>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/de.png" alt="DE"> <span style="color: #f7dd43; font-weight: bold;">🥇 ALE</span></div>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/ar.png" alt="AR"> <span style="color: #d1d1d1;">🥈 ARG</span></div>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/nl.png" alt="NL"> <span style="color: #e5a93b;">🥉 HOL</span></div>
        </div>
        <!-- 2010 -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: #0f172a; padding: 8px 12px; border-radius: 6px; border: 1px solid #1e293b;">
          <strong style="color: #94a3b8; width: 40px;">2010</strong>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/es.png" alt="ES"> <span style="color: #f7dd43; font-weight: bold;">🥇 ESP</span></div>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/nl.png" alt="NL"> <span style="color: #d1d1d1;">🥈 HOL</span></div>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/de.png" alt="DE"> <span style="color: #e5a93b;">🥉 ALE</span></div>
        </div>
        <!-- 2006 -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: #0f172a; padding: 8px 12px; border-radius: 6px; border: 1px solid #1e293b;">
          <strong style="color: #94a3b8; width: 40px;">2006</strong>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/it.png" alt="IT"> <span style="color: #f7dd43; font-weight: bold;">🥇 ITA</span></div>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/fr.png" alt="FR"> <span style="color: #d1d1d1;">🥈 FRA</span></div>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/de.png" alt="DE"> <span style="color: #e5a93b;">🥉 ALE</span></div>
        </div>
        <!-- 2002 -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: #0f172a; padding: 8px 12px; border-radius: 6px; border: 1px solid #1e293b;">
          <strong style="color: #94a3b8; width: 40px;">2002</strong>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/br.png" alt="BR"> <span style="color: #f7dd43; font-weight: bold;">🥇 BRA</span></div>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/de.png" alt="DE"> <span style="color: #d1d1d1;">🥈 ALE</span></div>
          <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/tr.png" alt="TR"> <span style="color: #e5a93b;">🥉 TUR</span></div>
        </div>
      </div>
    </div>
  `;

  /* ================= TÍTULO DA SUA LISTA ORIGINAL ================= */
  htmlCompleto += `<h3 style="color: #fff; margin: 15px 0 10px 0; font-size: 14px; text-transform: uppercase; font-family: sans-serif; font-weight: bold; letter-spacing: 0.5px;">⚽ Maiores Artilheiros das Copas</h3>`;

  /* ================= 2. SUA LÓGICA ORIGINAL DE ARTILHEIROS ================= */
  artilheirosHistoricos.forEach((artilheiro, index) => {
    let corGols = "#ccc";
    let prefixo = "⚽";
    let classeDestaque = "";
    
    if (index === 0) { corGols = "#f7dd43"; prefixo = "🥇"; classeDestaque = "artilheiro-destaque"; }
    else if (index === 1) { corGols = "#d1d1d1"; prefixo = "🥈"; classeDestaque = "artilheiro-destaque"; }
    else if (index === 2) { corGols = "#e5a93b"; prefixo = "🥉"; classeDestaque = "artilheiro-destaque"; }

    htmlCompleto += `
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

  // Renderiza tudo de uma vez só no container de forma limpa!
  lista.innerHTML = htmlCompleto;
}

// Inicialização segura para garantir que roda assim que o HTML carregar
if (document.readyState === "complete" || document.readyState === "interactive") {
  renderizarPaginaArtilheiros();
} else {
  document.addEventListener("DOMContentLoaded", renderizarPaginaArtilheiros);
}

