
/* ================= LÓGICA DE EXIBIÇÃO DE JOGOS ATUALIZADA ================= */
function renderJogos(){
  const div = document.getElementById("jogos");
  if (!div) return;
  div.innerHTML = "";

  jogosDetalhados.forEach((bloco, blocoIndex) => {
    if(grupoSelecionado !== null && bloco.grupo !== grupoSelecionado) return;

    let blocoHtml = `<div class="card"><h3>${bloco.grupo} - ${bloco.rodada}</h3>`;

    bloco.jogos.forEach((j, jogoIndex) => {
      const g1 = j.placarCasa || "";
      const g2 = j.placarFora || "";
      
      const ehMataMata = bloco.grupo === "Mata-mata";
      const deuEmpate = g1 !== "" && g2 !== "" && Number(g1) === Number(g2);
      
      const p1 = j.penaisCasa || "";
      const p2 = j.penaisFora || "";
      
      // Definição dinâmica do nome visível (Se tiver time real definido pelo grupo, usa ele)
      const timeCasaExibido = j.casaReal ? j.casaReal : j.casa;
      const timeForaExibido = j.foraReal ? j.foraReal : j.fora;

      const dataDoJogo = j.data ? j.data : bloco.data;
      const infoEstadio = `🏟️ ${j.estadio} | 📅 ${dataDoJogo}${j.hora ? " ⏰ " + j.hora : ""}${j.id ? " | 🔢 Partida " + j.id : ""}`;

      blocoHtml += `
        <div style="margin-bottom:6px;">
          ${getBandeira(timeCasaExibido)} <span class="time-texto">${timeCasaExibido}</span>
          
          <input type="number" min="0" value="${g1}" style="width:55px;" onchange="salvarPlacar(${blocoIndex},${jogoIndex},'casa',this.value)">
          
          ${ehMataMata && deuEmpate ? `<input type="number" min="0" placeholder="PK" value="${p1}" style="width:40px; background:#ffebeb; border:1px solid red; text-align:center;" onchange="salvarPenais(${blocoIndex},${jogoIndex},'casa',this.value)">` : ""}
          
          <strong>x</strong>
          
          ${ehMataMata && deuEmpate ? `<input type="number" min="0" placeholder="PK" value="${p2}" style="width:40px; background:#ffebeb; border:1px solid red; text-align:center;" onchange="salvarPenais(${blocoIndex},${jogoIndex},'fora',this.value)">` : ""}
          
          <input type="number" min="0" value="${g2}" style="width:55px;" onchange="salvarPlacar(${blocoIndex},${jogoIndex},'fora',this.value)">
          
          ${getBandeira(timeForaExibido)} <span class="time-texto">${timeForaExibido}</span>
          <br>
          <small>${infoEstadio}</small>
        </div>
        <hr>
      `;
    });
    
    blocoHtml += `</div>`;
    div.innerHTML += blocoHtml;
  });
}
function salvarPlacar(blocoIndex, jogoIndex, lado, valor){
  if(lado === "casa"){
    jogosDetalhados[blocoIndex].jogos[jogoIndex].placarCasa = valor;
  } else {
    jogosDetalhados[blocoIndex].jogos[jogoIndex].placarFora = valor;
  }
  atualizar(true);
}