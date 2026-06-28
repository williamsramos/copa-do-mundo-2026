
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
      
      // Definição dinâmica do nome visível
      const timeCasaExibido = j.casaReal ? j.casaReal : j.casa;
      const timeForaExibido = j.foraReal ? j.foraReal : j.fora;

      // 🔥 TRATAMENTO BLINDADO DE BANDEIRAS
      const ehProvisorioCasa = timeCasaExibido && timeCasaExibido.toLowerCase().includes("jogo");
      const bandeiraCasa = (timeCasaExibido && !ehProvisorioCasa && typeof getBandeira === "function") 
        ? getBandeira(timeCasaExibido) 
        : "";

      const ehProvisorioFora = timeForaExibido && timeForaExibido.toLowerCase().includes("jogo");
      const bandeiraFora = (timeForaExibido && !ehProvisorioFora && typeof getBandeira === "function") 
        ? getBandeira(timeForaExibido) 
        : "";

      const dataDoJogo = j.data ? j.data : bloco.data;
      const infoEstadio = `🏟️ ${j.estadio} | 📅 ${dataDoJogo}${j.hora ? " ⏰ " + j.hora : ""}${j.id ? " | 🔢 Partida " + j.id : ""}`;

      // Mudamos aqui para uma função interna temporária que garante a execução do fluxo
      blocoHtml += `
        <div style="margin-bottom:6px;">
          ${bandeiraCasa} <span class="time-texto">${timeCasaExibido}</span>
          
          <input type="number" min="0" value="${g1}" style="width:55px;" 
            onchange="if(typeof salvarGolsMataMata === 'function' && ${ehMataMata}){ salvarGolsMataMata(${blocoIndex},${jogoIndex},'casa',this.value); } else { salvarPlacar(${blocoIndex},${jogoIndex},'casa',this.value); if(${ehMataMata} && typeof verificarAvancoMataMata === 'function') { verificarAvancoMataMata(jogosDetalhados[${blocoIndex}].jogos[${jogoIndex}]); if(typeof atualizar === 'function') atualizar(true); } }">
          
          ${ehMataMata && deuEmpate ? `<input type="number" min="0" placeholder="PK" value="${p1}" style="width:40px; background:#ffebeb; border:1px solid red; text-align:center;" onchange="salvarPenais(${blocoIndex},${jogoIndex},'casa',this.value)">` : ""}
          
          <strong>x</strong>
          
          ${ehMataMata && deuEmpate ? `<input type="number" min="0" placeholder="PK" value="${p2}" style="width:40px; background:#ffebeb; border:1px solid red; text-align:center;" onchange="salvarPenais(${blocoIndex},${jogoIndex},'fora',this.value)">` : ""}
          
          <input type="number" min="0" value="${g2}" style="width:55px;" 
            onchange="if(typeof salvarGolsMataMata === 'function' && ${ehMataMata}){ salvarGolsMataMata(${blocoIndex},${jogoIndex},'fora',this.value); } else { salvarPlacar(${blocoIndex},${jogoIndex},'fora',this.value); if(${ehMataMata} && typeof verificarAvancoMataMata === 'function') { verificarAvancoMataMata(jogosDetalhados[${blocoIndex}].jogos[${jogoIndex}]); if(typeof atualizar === 'function') atualizar(true); } }">
          
          ${bandeiraFora} <span class="time-texto">${timeForaExibido}</span>
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