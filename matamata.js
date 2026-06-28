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

  if (jogo.placarCasa !== "" && jogo.placarFora !== "") {
    verificarAvancoMataMata(jogo);
  }
  atualizar(true);
}

function verificarAvancoMataMata(jogoAtual) {
  const id = parseInt(jogoAtual.id);
  const gCasa = parseInt(jogoAtual.placarCasa);
  const gFora = parseInt(jogoAtual.placarFora);

  if (isNaN(gCasa) || isNaN(gFora)) return;

  let vencedor = "";
  let perdedor = "";

  if (gCasa > gFora) {
    vencedor = jogoAtual.casa;
    perdedor = jogoAtual.fora;
  } else if (gFora > gCasa) {
    vencedor = jogoAtual.fora;
    perdedor = jogoAtual.casa;
  } else {
    const pCasa = parseInt(jogoAtual.penaisCasa || 0);
    const pFora = parseInt(jogoAtual.penaisFora || 0);
    if (pCasa !== pFora) {
      vencedor = pCasa > pFora ? jogoAtual.casa : jogoAtual.fora;
      perdedor = pCasa > pFora ? jogoAtual.fora : jogoAtual.casa;
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

  if (typeof juegosDetalhados !== "undefined") {
     window.jogosDetalhados = juegosDetalhados;
  }

  if (typeof jogosDetalhados !== "undefined") {
    jogosDetalhados.forEach(bloco => {
      bloco.jogos.forEach(j => {
        if (j.id === alvo.prox) j[alvo.lado] = vencedor;
        if (alvo.perd && j.id === alvo.perd) j[alvo.ladoPerd] = perdedor;
      });
    });
  }
}

// function injetar8TerceirosNoMataMata() {
//   if (typeof get8MelhoresTerceiros !== "function" || typeof jogosDetalhados === "undefined") return;
  
//   const terceiros = get8MelhoresTerceiros(); 
//   if (terceiros.length < 8) return; 

//   // ORDENAÇÃO CORRIGIDA DOS IDS PARA BATER COM OS CONFRONTOS DA SUA IMAGEM:
//   // 1º do Ranking (Congo) -> Jogo 74 (Alemanha x Congo)
//   // 2º do Ranking (Suécia) -> Jogo 77 (França x Suécia)
//   // 3º do Ranking (Gana) -> Jogo 79 (México x Gana)
//   // 4º do Ranking (Equador) -> Jogo 80 (Inglaterra x Equador)
//   // 5º do Ranking (Paraguai) -> Jogo 82 (Bélgica x Paraguai)
//   // 6º do Ranking (Argélia) -> Jogo 85 (Suíça x Argélia)
//   // 7º do Ranking (Senegal) -> Jogo 87 (Colômbia x Senegal)
//   const idsParaPreencher = [74, 77, 79, 80, 81,82, 85, 87];

//   jogosDetalhados.forEach(bloco => {
//     if (bloco.rodada === "16 avos de Final") {
//       idsParaPreencher.forEach((idJogo, idx) => {
//         let jogo = bloco.jogos.find(j => j.id === idJogo);
//         if (jogo && terceiros[idx]) {
//           jogo.fora = terceiros[idx].nome; // Injeta o nome do terceiro correspondente
//         }
//       });
//     }
//   });
// }

function injetar8TerceirosNoMataMata() {
  if (typeof get8MelhoresTerceiros !== "function" || typeof jogosDetalhados === "undefined") return;
  
  const terceiros = get8MelhoresTerceiros(); 
  if (terceiros.length < 8) return; // Aguarda os grupos estarem matematicamente fechados

  // MAPEAMENTO DINÂMICO CONFORME O RANKING OFICIAL DA FIFA:
  // idx 0 (1º do Ranking) -> Jogo 74 (Alemanha)
  // idx 1 (2º do Ranking) -> Jogo 77 (França)
  // idx 2 (3º do Ranking) -> Jogo 79 (México)
  // idx 3 (4º do Ranking) -> Jogo 80 (Inglaterra)
  // idx 4 (5º do Ranking) -> Jogo 81 (EUA - Vaga da Bósnia se ela mantiver o 5º lugar)
  // idx 5 (6º do Ranking) -> Jogo 82 (Bélgica)
  // idx 6 (7º do Ranking) -> Jogo 87 (Colômbia)
  // idx 7 (8º do Ranking) -> Jogo 85 (Suíça)
  const idsParaPreencher = [74, 77, 79, 80, 81, 82, 87, 85];

  jogosDetalhados.forEach(bloco => {
    if (bloco.rodada === "16 avos de Final") {
      idsParaPreencher.forEach((idJogo, idx) => {
        let jogo = bloco.jogos.find(j => j.id === idJogo);
        if (jogo && terceiros[idx]) {
          jogo.fora = terceiros[idx].nome; // Preenche o visitante com o time do ranking correspondente
        }
      });
    }
  });
}
