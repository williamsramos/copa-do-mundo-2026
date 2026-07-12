
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
      let timeCasaExibido = j.casaReal ? j.casaReal : j.casa;
      let timeForaExibido = j.foraReal ? j.foraReal : j.fora;

      // =========================================================================
      // 🔥 FILTRO COMPLETO: Identifica e limpa qualquer padrão de "Jogo XX"
      // =========================================================================
      const ehProvisorioCasa = /jogo\s*\d+/i.test(timeCasaExibido);
      const bandeiraCasa = (timeCasaExibido && !ehProvisorioCasa && typeof getBandeira === "function") 
        ? getBandeira(timeCasaExibido) 
        : "";

      const ehProvisorioFora = /jogo\s*\d+/i.test(timeForaExibido);
      const bandeiraFora = (timeForaExibido && !ehProvisorioFora && typeof getBandeira === "function") 
        ? getBandeira(timeForaExibido) 
        : "";
      // =========================================================================

      const dataDoJogo = j.data ? j.data : bloco.data;
      //const infoEstadio = `🏟️ ${j.estadio} | 📅 ${dataDoJogo}${j.hora ? " ⏰ " + j.hora : ""}${j.id ? " | 🔢 Partida " + j.id : ""}`;
       // Altere para puxar o dado dinâmico do objeto:
       const infoEstadio = `🏟️ ${jogo.estadio} | 📅 ${jogo.data} | ⏰ ${jogo.hora} | 🔢 Partida ${jogo.id}`


      // Usa salvarPlacar por padrão, mas garante a checagem do mata-mata internamente
      blocoHtml += `
        <div style="margin-bottom:6px;">
          ${bandeiraCasa} <span class="time-texto">${timeCasaExibido}</span>
          
          <input type="number" min="0" value="${g1}" style="width:55px;" 
            onchange="salvarPlacar(${blocoIndex},${jogoIndex},'casa',this.value); if(typeof verificarAvancoMataMata === 'function') verificarAvancoMataMata(jogosDetalhados[${blocoIndex}].jogos[${jogoIndex}]); if(typeof atualizar === 'function') atualizar(true); renderJogos();">
          
          ${ehMataMata && deuEmpate ? `<input type="number" min="0" placeholder="PK" value="${p1}" style="width:40px; background:#333333; border:1px solid white; text-align:center;"  onchange="salvarPenais(${blocoIndex},${jogoIndex},'casa',this.value); if(typeof verificarAvancoMataMata === 'function') verificarAvancoMataMata(jogosDetalhados[${blocoIndex}].jogos[${jogoIndex}]); if(typeof atualizar === 'function') atualizar(true); renderJogos();">` : ""}
          
          <strong>x</strong>
          
          ${ehMataMata && deuEmpate ? `<input type="number" min="0" placeholder="PK" value="${p2}" style="width:40px; background:#333333; border:1px solid white; text-align:center;" onchange="salvarPenais(${blocoIndex},${jogoIndex},'fora',this.value); if(typeof verificarAvancoMataMata === 'function') verificarAvancoMataMata(jogosDetalhados[${blocoIndex}].jogos[${jogoIndex}]); if(typeof atualizar === 'function') atualizar(true); renderJogos();">` : ""}
          
          <input type="number" min="0" value="${g2}" style="width:55px;" 
            onchange="salvarPlacar(${blocoIndex},${jogoIndex},'fora',this.value); if(typeof verificarAvancoMataMata === 'function') verificarAvancoMataMata(jogosDetalhados[${blocoIndex}].jogos[${jogoIndex}]); if(typeof atualizar === 'function') atualizar(true); renderJogos();">
          
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