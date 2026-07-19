// 1. NOVA FUNÇÃO: Salva o estado atual dos jogos como o seu "Novo Padrão"
function salvarPalpitesDefinitivos() {
  localStorage.setItem("gabaritoSimulador", JSON.stringify(jogosDetalhados));
  alert("💾 Seus placares foram salvos como oficiais! Mesmo se você resetar a tela, o simulador voltará para este ponto.");
}

// 2. ADAPTADA: O resetar agora volta para o seu último salvamento oficial ou limpa tudo
function limparSimulador() {
  if (confirm("Deseja realmente apagar todos os palpites salvos e retornar para o padrão?")) {
    const gabarito = localStorage.getItem("gabaritoSimulador");
    
    if (gabarito) {
      // Se você já salvou palpites antes, o reset volta para eles
      localStorage.setItem("jogosSimulador", gabarito);
    } else {
      // Se nunca salvou, ele limpa tudo e volta pro padrão original do código
      localStorage.removeItem("jogosSimulador");
      localStorage.clear();
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
  div.innerHTML += `<button onclick="selecionarGrupo('Mata-mata')" id="aba-Mata-mata">Mata-mata</button>`;
  for(let g in grupos){
    div.innerHTML += `<button onclick="selecionarGrupo('${g}')" id="aba-${g}">${g}</button>`;
  }
  
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

  // =========================================================================
  // 🔥 INJEÇÃO AUTOMÁTICA DOS MELHORES TERCEIROS NO CHAVEAMENTO DO MATA-MATA
  // =========================================================================
  if (typeof injetar8TerceirosNoMataMata === "function") {
    injetar8TerceirosNoMataMata();
  }

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

/* Event Listener de Inicialização segura da DOM */
document.addEventListener("DOMContentLoaded", () => {
  init();
});


/* =========================================================================
   🔥 INTERCEPTOR PARA INJETAR A TAÇA ANTES E O PÓDIO DEPOIS DA FINAL
   ========================================================================= */

// Guardamos a definição padrão da função original para não quebrar o escopo interno
const renderJogosOriginal = typeof renderJogos !== 'undefined' ? renderJogos : null;

// Criamos/Sobrescrevemos a função renderJogos adicionando o comportamento visual
renderJogos = function() {
  // 1. Executa primeiro a renderização padrão de listas e cards do seu simulador
  if (typeof renderJogosOriginal === 'function') {
    renderJogosOriginal();
  }

  // 2. Verifica se o usuário está filtrando para ver as finais ("Mata-mata" or "Todos")
  if (typeof grupoSelecionado !== 'undefined' && (grupoSelecionado === "Mata-mata" || grupoSelecionado === null)) {
    
    // Varre todos os subtítulos de seções gerados dinamicamente na página
    const titulosFases = document.querySelectorAll("h3, h2, .titulo-rodada");
    
    titulosFases.forEach(titulo => {
      // Procura especificamente o cabeçalho "Mata-mata - Final"
      if (titulo.textContent.trim().includes("Final") && 
          !titulo.textContent.includes("16 avos") && 
          !titulo.textContent.includes("Oitavas") && 
          !titulo.textContent.includes("Quartas") && 
          !titulo.textContent.includes("Semifinal")) {
        
        // --- PARTE 1: ADICIONAR A TAÇA ANTES DO CARD DA FINAL ---
        if (!titulo.previousElementSibling || !titulo.previousElementSibling.classList.contains("container-taca-copa")) {
          const containerTaca = document.createElement("div");
          containerTaca.className = "container-taca-copa";
          containerTaca.style.textAlign = "center";
          containerTaca.style.marginBottom = "15px";
          containerTaca.style.width = "100%";
          
          titulo.parentNode.insertBefore(containerTaca, titulo);
        }

        // --- PARTE 2: ADICIONAR O BLOCO DO PÓDIO DEPOIS DO CARD DA FINAL ---
        // O card da final geralmente é o elemento irmão que vem logo após o título, ou o próprio container dele.
        // Vamos encontrar o container do card (geralmente o elemento pai ou o próximo irmãozão) para colar o pódio embaixo.
        const cardFinalContainer = titulo.closest('.bloco-rodada') || titulo.parentElement;

        if (cardFinalContainer && !cardFinalContainer.nextElementSibling?.classList.contains("container-resultado-podio")) {
          const containerPodio = document.createElement("div");
          containerPodio.className = "container-resultado-podio";
          containerPodio.style.width = "100%";
          containerPodio.style.marginTop = "20px";

          // Aqui entra exatamente o seu código estruturado com as classes CSS
          containerPodio.innerHTML = `
            <!-- 🥇 BLOCO DO PÓDIO: Agora limpo, usando as classes do CSS! -->
            <div class="card card-podio" style="animation-delay: 2.4s;">
              <h2>🏆 PÓDIO DA COPA</h2>
              
              <div class="taca-container">
                <img src="worldcup_favicon.png" alt="Taça da Copa" style="width: 95px; height: auto; display: inline-block;">
                <h3>Campeão</h3><div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/" alt=""> <span style="color: #f7dd43; font-weight: bold;">🥇 </span></div>
              </div>
        <!-- 2026 -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: #0f172a; padding: 8px 12px; border-radius: 6px; border: 1px solid #1e293b;">
            <strong style="color: #94a3b8; width: 40px;">2026</strong>
            <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/" alt=""> <span style="color: #d1d1d1;">🥈 </span></div>
            <div style="display: flex; align-items: center; gap: 4px; width: 85px;"><img src="https://flagcdn.com/w20/gb-eng.png" alt="england"> <span style="color: #e5a93b;">🥉 Inglaterra </span></div>
        </div>
          `;

          // Insere o bloco do Pódio logo após o término do card da final
          cardFinalContainer.parentNode.insertBefore(containerPodio, cardFinalContainer.nextSibling);
        }
      }
    });
  }
};
