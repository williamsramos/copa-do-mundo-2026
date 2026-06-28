/* ================= LÓGICA ESPECÍFICA DO MATA-MATA ================= */

function salvarPenais(blocoIndex, jogoIndex, lado, valor) {
  if(lado === "casa"){
    jogosDetalhados[blocoIndex].jogos[jogoIndex].penaisCasa = valor;
  } else {
    jogosDetalhados[blocoIndex].jogos[jogoIndex].penaisFora = valor;
  }
  verificarAvancoMataMata(jogosDetalhados[blocoIndex].jogos[jogoIndex]);
  atualizar(true);
}

function salvarGolsMataMata(blocoIndex, jogoIndex, lado, valor) {
  const jogo = jogosDetalhados[blocoIndex].jogos[jogoIndex];
  if (lado === "casa") {
    jogo.placarCasa = valor;
  } else {
    jogo.placarFora = valor;
  }

  // 🔥 Força a verificação de avanço sempre que houver alteração
  verificarAvancoMataMata(jogo);
  atualizar(true);
}

function salvarPlacar(blocoIndex, jogoIndex, lado, valor) {
  // Esta é a função da fase de grupos, mas por segurança, se for chamada no mata-mata, ela também avança!
  const jogo = jogosDetalhados[blocoIndex].jogos[jogoIndex];
  if (lado === "casa") {
    jogo.placarCasa = valor;
  } else {
    jogo.placarFora = valor;
  }
  
  if (jogo.grupo === "Mata-mata") {
    verificarAvancoMataMata(jogo);
  }
  atualizar(true);
}

function verificarAvancoMataMata(jogoAtual) {
  const id = parseInt(jogoAtual.id);
  
  // IMPORTANTE: Busca os gols reais ou os gols da propriedade Real se houver
  const gCasa = parseInt(jogoAtual.placarCasa);
  const gFora = parseInt(jogoAtual.placarFora);

  if (isNaN(gCasa) || isNaN(gFora)) return;

  // Descobre o nome textual exato dos times envolvidos que jogaram
  const timeCasaNome = jogoAtual.casaReal ? jogoAtual.casaReal : jogoAtual.casa;
  const timeForaNome = jogoAtual.foraReal ? jogoAtual.foraReal : jogoAtual.fora;

  let vencedor = "";
  let perdedor = "";

  if (gCasa > gFora) {
    vencedor = timeCasaNome;
    perdedor = timeForaNome;
  } else if (gFora > gCasa) {
    vencedor = timeForaNome;
    perdedor = timeCasaNome;
  } else {
    const pCasa = parseInt(jogoAtual.penaisCasa || 0);
    const pFora = parseInt(jogoAtual.penaisFora || 0);
    if (pCasa !== pFora) {
      vencedor = pCasa > pFora ? timeCasaNome : timeForaNome;
      perdedor = pCasa > pFora ? timeForaNome : timeCasaNome;
    } else {
      return; 
    }
  }

  const destinos = {
    73: { prox: 90, lado: "casa" },  75: { prox: 90, lado: "fora" },
    74: { prox: 89, lado: "casa" },  77: { prox: 89, lado: "fora" },
    76: { prox: 91, lado: "casa" },  78: { prox: 91, lado: "fora" },
    79: { prox: 92, lado: "casa" },  80: { prox: 92, lado: "fora" },
    83: { prox: 94, lado: "casa" },  84: { prox: 94, lado: "fora" },
    81: { prox: 93, lado: "casa" },  82: { prox: 93, lado: "fora" },
    86: { prox: 95, lado: "casa" },  88: { prox: 95, lado: "fora" },
    85: { prox: 96, lado: "casa" },  87: { prox: 96, lado: "fora" },

    // Oitavas -> Quartas
    89: { prox: 97, lado: "casa" },  90: { prox: 97, lado: "fora" },
    93: { prox: 98, lado: "casa" },  94: { prox: 98, lado: "fora" },
    91: { prox: 99, lado: "casa" },  92: { prox: 99, lado: "fora" },
    95: { prox: 100, lado: "casa" }, 96: { prox: 100, lado: "fora" },

    // Quartas -> Semi
    97: { prox: 101, lado: "casa" }, 98: { prox: 101, lado: "fora" },
    99: { prox: 102, lado: "casa" }, 100: { prox: 102, lado: "fora" },

    // Semis -> Final e 3º Lugar
    101: { prox: 104, lado: "casa", perd: 103, ladoPerd: "casa" },
    102: { prox: 104, lado: "fora", perd: 103, ladoPerd: "fora" }
  };

  const alvo = destinos[id];
  if (!alvo) return;

  if (typeof jogosDetalhados !== "undefined") {
    jogosDetalhados.forEach(bloco => {
      bloco.jogos.forEach(j => {
        if (j.id === alvo.prox) {
          // 🔥 ATUALIZAÇÃO DEFINITIVA: Altera tanto a propriedade base quanto a Real
          j[alvo.lado] = vencedor;
          if (alvo.lado === "casa") j.casaReal = vencedor;
          if (alvo.lado === "fora") j.foraReal = vencedor;
        }
        if (alvo.perd && j.id === alvo.perd) {
          j[alvo.ladoPerd] = perdedor;
          if (alvo.ladoPerd === "casa") j.casaReal = perdedor;
          if (alvo.ladoPerd === "fora") j.foraReal = perdedor;
        }
      });
    });
  }
}


function injetar8TerceirosNoMataMata() {
  if (typeof get8MelhoresTerceiros !== "function" || typeof jogosDetalhados === "undefined") return;
  
  const terceiros = get8MelhoresTerceiros(); 
  if (terceiros.length < 8) return; 

  // MAPA DEFINITIVO CONFORME O SEU CHAVEAMENTO OFICIAL DA FIFA:
  // idx 0 (1º: Congo)    -> Jogo 80 (Inglaterra x Congo)
  // idx 1 (2º: Suécia)   -> Jogo 77 (França x Suécia)
  // idx 2 (3º: Gana)     -> Jogo 87 (Colômbia x Gana)
  // idx 3 (4º: Equador)  -> Jogo 79 (México x Equador)
  // idx 4 (5º: Bósnia)   -> Jogo 81 (EUA x Bósnia)
  // idx 5 (6º: Argélia)  -> Jogo 85 (Suíça x Argélia)
  // idx 6 (7º: Paraguai) -> Jogo 74 (Alemanha x Paraguai)
  // idx 7 (8º: Senegal)  -> Jogo 82 (Bélgica x Senegal)
  const idsParaPreencher = [80, 77, 87, 79, 81, 85, 74, 82];

  // Injeta os nomes corretos na estrutura de dados do mata-mata antes de renderizar os cards
  jogosDetalhados.forEach(bloco => {
    if (bloco.rodada === "16 avos de Final") {
      idsParaPreencher.forEach((idJogo, idx) => {
        let jogo = bloco.jogos.find(j => j.id === idJogo);
        if (jogo && terceiros[idx]) {
          jogo.fora = terceiros[idx].nome; 
        }
      });
    }
  });
}
