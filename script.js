// 1. NOVA FUNÇÃO: Salva o estado atual dos jogos como o seu "Novo Padrão"
function salvarPalpitesDefinitivos() {
  localStorage.setItem("gabaritoSimulador", JSON.stringify(jogosDetalhados));
  alert("💾 Seus placares foram salvos como oficiais! Mesmo se você resetar a tela, o simulador voltará para este ponto.");
}

// 2. ADAPTADA: O resetar agora volta para o seu último salvamento oficial
function limparSimulador() {
  if (confirm("Deseja realmente retornar os jogos para o seu último palpite oficial salvo?")) {
    const gabarito = localStorage.getItem("gabaritoSimulador");
    
    if (gabarito) {
      // Se você já salvou palpites antes, o reset volta para eles
      localStorage.setItem("jogosSimulador", gabarito);
    } else {
      // Se nunca salvou, ele limpa tudo e volta pro padrão original do código
      localStorage.removeItem("jogosSimulador");
    }
    location.reload();
  }
}

// 3. ADAPTADA: O init agora prioriza o seu palpite salvo se o histórico sumir
function init(){
  const salvos = localStorage.getItem("jogosSimulador");
  const gabarito = localStorage.getItem("gabaritoSimulador");

  if (salvos) {
    jogosDetalhados = JSON.parse(salvos);

    // Proteção de propriedades invisíveis para o mata-mata
    jogosDetalhados.forEach(bloco => {
      bloco.jogos.forEach(jogo => {
        if (jogo.casaReal === undefined) jogo.casaReal = "";
        if (jogo.foraReal === undefined) jogo.foraReal = "";
      });
    });
    
  } else if (gabarito) {
    // Se não tem histórico atual, mas tem gabarito salvo pelo botão, usa o gabarito!
    jogosDetalhados = JSON.parse(gabarito);
  } else {
    // Se o site acabou de ser aberto do zero absoluto, usa o padrão do arquivo
    jogosDetalhados = JSON.parse(JSON.stringify(jogosPadrao)); 
  }

  // Montagem da tabela original do seu projeto
  tabela = {};
  for(let g in grupos){
    tabela[g] = {};
    grupos[g].forEach((t, i) => {
      tabela[g][t] = { pts: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, pos: i + 1 };
    });
  }
  criarAbas();
  destacarAba();
  atualizar(false); 
  renderJogos();
  renderTabela();
}
function criarAbas(){
  const div = document.getElementById("abasGrupos");
  if(!div) return;
  div.innerHTML = `<button onclick="selecionarGrupo('todos')" id="aba-todos">Todos</button>`;
  for(let g in grupos){
    div.innerHTML += `<button onclick="selecionarGrupo('${g}')" id="aba-${g}">${g}</button>`;
  }
  div.innerHTML += `<button onclick="selecionarGrupo('Mata-mata')" id="aba-Mata-mata">Mata-mata</button>`;
  
  // BOTÃO DE RESET EM DESTAQUE
  div.innerHTML += `<button onclick="salvarPalpitesDefinitivos()" style="background-color: #28a745; color: white; margin-left: 15px; font-weight: bold; border: none; padding: 6px 12px; cursor: pointer; border-radius: 4px; display: inline-flex; align-items: center; justify-content: center; width: auto; min-width: max-content; white-space: nowrap;">💾 Salvar Placar</button> <button onclick="limparSimulador()" style="background-color: #d9534f; color: white; margin-left: 15px; font-weight: bold;">🔄 Resetar</button>`;
}

function selecionarGrupo(grupo){
  grupoSelecionado = grupo === "todos" ? null : grupo;
  showTab('jogosTab'); // Força o HTML a mostrar a seção de jogos
  renderJogos();
  destacarAba();
}

function destacarAba(){
  const chavesValidas = Object.keys(grupos).concat(["todos", "Mata-mata"]);
  chavesValidas.forEach(g => {
    const btn = document.getElementById(`aba-${g}`);
    if(!btn) return;
    btn.classList.remove("ativo");
    if((g === "todos" && !grupoSelecionado) || g === grupoSelecionado){
      btn.classList.add("ativo");
    }
  });
}


/* ================= COMPUTAÇÃO DE PONTUAÇÕES E CHAVEAMENTO AUTOMÁTICO ================= */
function atualizar(deveRenderizar = true){
  if(!tabela || Object.keys(tabela).length === 0) return;

  // 1. Zera os pontos da tabela para recalcular do zero baseado nos palpites
  for(let g in tabela){
    for(let t in tabela[g]){
      tabela[g][t] = { pts:0, v:0, e:0, d:0, gp:0, gc:0, pos:tabela[g][t].pos };
    }
  }

  // Objeto para contar quantos jogos CADA SELEÇÃO realizou individualmente
  const jogosPorSelecao = {};

  // 2. Calcula os pontos da Fase de Grupos
  jogosDetalhados.forEach(bloco => {
    if(bloco.grupo === "Mata-mata") return; 

    const grupo = bloco.grupo;

    bloco.jogos.forEach(jogo => {
      if(jogo.placarCasa === "" || jogo.placarFora === "") return;

      const g1 = Number(jogo.placarCasa);
      const g2 = Number(jogo.placarFora);
      if(isNaN(g1) || isNaN(g2)) return;

      // Inicializa os contadores da seleção caso não existam
      if (!jogosPorSelecao[jogo.casa]) jogosPorSelecao[jogo.casa] = 0;
      if (!jogosPorSelecao[jogo.fora]) jogosPorSelecao[jogo.fora] = 0;

      // Soma 1 jogo realizado para cada uma das duas seleções envolvidas nessa partida
      jogosPorSelecao[jogo.casa]++;
      jogosPorSelecao[jogo.fora]++;

      if(!tabela[grupo] || !tabela[grupo][jogo.casa] || !tabela[grupo][jogo.fora]) return;
      
      const casa = tabela[grupo][jogo.casa];
      const fora = tabela[grupo][jogo.fora];

      casa.gp += g1;
      casa.gc += g2;
      fora.gp += g2;
      fora.gc += g1;

      if(g1 > g2){
        casa.v++; casa.pts += 3; fora.d++;
      } else if(g2 > g1){
        fora.v++; fora.pts += 3; casa.d++;
      } else {
        casa.e++; fora.e++; casa.pts++; fora.pts++;
      }
    });
  });

  // =================================================================
  // 3. Mapeia quem são os classificados de cada grupo (ORDENAÇÃO CORRIGIDA)
  // =================================================================
  const classificadosPorGrupo = {};

  for(let g in tabela){
    let times = Object.entries(tabela[g]);
    
    // CORREÇÃO AQUI: Nova lógica expandida com todos os critérios de desempate
    times.sort((a, b) => {
      if (b[1].pts !== a[1].pts) {
        return b[1].pts - a[1].pts; // 1º Critério: Pontos (Maior primeiro)
      }
      
      const saldoA = a[1].gp - a[1].gc;
      const saldoB = b[1].gp - b[1].gc;
      if (saldoB !== saldoA) {
        return saldoB - saldoA; // 2º Critério: Saldo de Gols (Maior primeiro)
      }
      
      if (b[1].gp !== a[1].gp) {
        return b[1].gp - a[1].gp; // 3º Critério: Gols Pró / Marcados (Maior primeiro)
      }
      
      return a[1].pos - b[1].pos; // 4º Critério: Posição original de sorteio
    });
    
    // Daqui para baixo continua o resto do seu código original que pega os classificados:
    const time1 = times[0] ? times[0][0] : "";
    const time2 = times[1] ? times[1][0] : "";
    const time3 = times[2] ? times[2][0] : "";

    // Validação das vagas (se a seleção já fez os 3 jogos dela)
    classificadosPorGrupo[g] = {
      primeiro: (jogosPorSelecao[time1] === 3) ? time1 : "",
      segundo: (jogosPorSelecao[time2] === 3) ? time2 : "",
      terceiro: (jogosPorSelecao[time3] === 3) ? time3 : ""
    };
  }

  // 4. Preenche os confrontos de "16 avos de Final" baseado nos times validados
  jogosDetalhados.forEach(bloco => {
    if(bloco.grupo !== "Mata-mata" || bloco.rodada !== "16 avos de Final") return;

    bloco.jogos.forEach(jogo => {
      // Verifica o time da CASA
      if (jogo.casa && jogo.casa.includes("Grupo")) {
        const nomeGrupo = jogo.casa.split("º ")[1];
        if (classificadosPorGrupo[nomeGrupo]) {
          if (jogo.casa.startsWith("1º")) jogo.casaReal = classificadosPorGrupo[nomeGrupo].primeiro;
          if (jogo.casa.startsWith("2º")) jogo.casaReal = classificadosPorGrupo[nomeGrupo].segundo;
          if (jogo.casa.startsWith("3º")) jogo.casaReal = classificadosPorGrupo[nomeGrupo].terceiro;
        }
      } else {
        jogo.casaReal = jogo.casa;
      }

      // Verifica o time de FORA
      if (jogo.fora && jogo.fora.includes("Grupo")) {
        const nomeGrupo = jogo.fora.split("º ")[1];
        if (classificadosPorGrupo[nomeGrupo]) {
          if (jogo.fora.startsWith("1º")) jogo.foraReal = classificadosPorGrupo[nomeGrupo].primeiro;
          if (jogo.fora.startsWith("2º")) jogo.foraReal = classificadosPorGrupo[nomeGrupo].segundo;
          if (jogo.fora.startsWith("3º")) jogo.foraReal = classificadosPorGrupo[nomeGrupo].terceiro;
        }
      } else {
        jogo.foraReal = jogo.fora;
      }
    });
  });

  // 5. Calcula o avanço das próximas fases do mata-mata (Oitavas, Quartas, etc.)
  if (typeof calcularAvancoMataMata === 'function') {
    calcularAvancoMataMata();
  }

  // Salva o estado atualizado no navegador
  localStorage.setItem("jogosSimulador", JSON.stringify(jogosDetalhados));
  
  if(deveRenderizar) {
    renderJogos();
    renderTabela();
  }
}

function showTab(tabId) {
  const abas = document.querySelectorAll('.tab'); 
  abas.forEach(aba => aba.style.display = 'none');
  const abaAtiva = document.getElementById(tabId);
  if(abaAtiva) abaAtiva.style.display = 'block';
}



function limparSimulador() {
  if (confirm("Deseja realmente apagar todos os palpites salvos e recomeçar o simulador?")) {
    localStorage.clear();
    location.reload();
  }
}

/* Event Listener de Inicialização segura da DOM */
document.addEventListener("DOMContentLoaded", () => {
  init();
});



