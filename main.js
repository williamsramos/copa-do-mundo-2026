

// 🌍 DICIONÁRIO DE BANDEIRAS INTEGRADO DIRETO NO MAIN.JS
const bandeirasCopa = {
  "México": "mx", "África do Sul": "za", "Coreia do Sul": "kr", "República Tcheca": "cz",
  "Canadá": "ca", "Bósnia e Herz.": "ba", "Catar": "qa", "Suíça": "ch",
  "EUA": "us", "Paraguai": "py", "Brasil": "br", "Marrocos": "ma",
  "Haiti": "ht", "Escócia": "gb-sct", "Austrália": "au", "Turquia": "tr",
  "Alemanha": "de", "Curaçau": "cw", "Costa do Marfim": "ci", "Equador": "ec",
  "Holanda": "nl", "Japão": "jp", "Suécia": "se", "Tunísia": "tn",
  "Espanha": "es", "Cabo Verde": "cv", "Bélgica": "be", "Egito": "eg",
  "Arábia Saudita": "sa", "Uruguai": "uy", "Irã": "ir", "Nova Zelândia": "nz",
  "França": "fr", "Senegal": "sn", "Iraque": "iq", "Noruega": "no",
  "Argentina": "ar", "Argélia": "dz", "Áustria": "at", "Jordânia": "jo",
  "Portugal": "pt", "Congo": "cd", "Inglaterra": "gb-eng", "Croácia": "hr",
  "Gana": "gh", "Panamá": "pa", "Uzbeq.": "uz", "Colômbia": "co"
};

// 🔥 NORMALIZAR NOMES (para bater certinho com as chaves do objeto)
function normalizar(nome) {
  if (!nome) return "";
  return nome
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "_");
}

// 🔥 PEGAR BANDEIRA CORRIGIDA
function getBandeira(time){
  if (!time) return "";
  
  // Busca a chave correta ignorando maiúsculas/minúsculas e acentos
  const chave = Object.keys(bandeirasCopa).find(
    k => normalizar(k) === normalizar(time)
  );

  if(!chave) return ""; // Se for nome do mata-mata (ex: "2º Grupo A"), não põe bandeira e não quebra

  const code = bandeirasCopa[chave];
  return `<img src="https://flagcdn.com/w40/${code}.png" style="width:20px; margin-right:6px; vertical-align:middle;">`;
}

// 🔥 CRIAR ESTRUTURA DO JOGO
function createGame(player1, hour, player2) {
  return `
    <li>
      <div class="team" style="display: flex; align-items: center; gap: 8px; justify-content: flex-end; width: 42%;">
        ${getBandeira(player1)} <span>${player1}</span>
      </div>

      <strong style="width: 16%; text-align: center; display: inline-block;">${hour}</strong>

      <div class="team" style="display: flex; align-items: center; gap: 8px; justify-content: flex-start; width: 42%;">
        <span>${player2}</span> ${getBandeira(player2)}
      </div>
    </li>
  `;
}

// 🔥 ANIMAÇÃO E CONTAGEM DOS CARDS
let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  const jogosCount = (games.match(/<li>/g) || []).length;
  const classeCard = jogosCount >= 2 ? "card multiplo" : "card";

  return `
    <div class="${classeCard}" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `;
}

// 🔥 RENDERIZAR JOGOS NA TELA
document.querySelector("#cards").innerHTML =
`<div class="fase-divisor" style="width: 100%; text-align: center; margin: 40px 0 20px; color: #08ed49; font-family: sans-serif; font-size: 1.5rem; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">🔥 Fase de Grupos 🔥</div>` +
//  createCard('11/06', 'quinta',
//     createGame("México", "x" , "África do Sul") +
//     createGame("Coreia do Sul", "x", "República Tcheca")
//   ) +

//   createCard('12/06', 'sexta',
//     createGame("Canadá", "x", "Bósnia e Herz.") +
//     createGame("EUA", "x", "Paraguai") 
//   ) +

//   createCard('13/06', 'sábado',
//     createGame("Catar", "x", "Suíça") +
//     createGame("Brasil", "x", "Marrocos") +
//     createGame("Haiti", "x", "Escócia") 
//   ) +

//   createCard('14/06', 'domingo',
//     createGame("Austrália", "x", "Turquia") +
//     createGame("Alemanha", "x", "Curaçau") +
//     createGame("Costa do Marfim", "x", "Equador") +
//     createGame("Holanda", "x", "Japão") +
//     createGame("Suécia", "x", "Tunísia")  
//   ) +

//   createCard('15/06', 'segunda',
//     createGame("Espanha", "x", "Cabo Verde") +
//     createGame("Bélgica", "x", "Egito") +
//     createGame("Arábia Saudita", "x", "Uruguai") +
//     createGame("Irã", "x", "Nova Zelândia")
//   ) +

//   createCard('16/06', 'terça',
//     createGame("França", "x", "Senegal") +
//     createGame("Iraque", "x", "Noruega") +   
//     createGame("Argentina", "x", "Argélia") +
//     createGame("Áustria", "x", "Jordânia")
//   ) +

//   createCard('17/06', 'quarta',
//     createGame("Portugal", "x", "Congo") +
//     createGame("Inglaterra", "x", "Croácia") +
//     createGame("Gana", "x", "Panamá") + 
//     createGame("Uzbequistão", "x", "Colômbia")  
//   ) +

  // createCard('18/06', 'quinta',
  //   // createGame("República Tcheca", "x", "África do Sul") +
  //   // createGame("Suíça", "x", "Bósnia e Herz.") +
  //   createGame("Canadá", "x", "Catar") + 
  //   createGame("México", "x", "Coreia do Sul") 
  // ) +

  // createCard('19/06', 'sexta',
  //   createGame("EUA", "x", "Austrália") +
  //   createGame("Escócia", "x", "Marrocos") +
  //   createGame("Brasil", "x", "Haiti")      
  // ) +

  // createCard('20/06', 'sábado',
  //   createGame("Holanda", "x", "Suécia") +
  //   createGame("Alemanha", "x", "Costa do Marfim") +
  //   createGame("Equador", "x", "Curaçau") 
  // ) +

  // createCard('21/06', 'domingo',
  //   createGame("Tunísia", "x", "Japão") +
  //   createGame("Espanha", "x", "Arábia Saudita") +
  //   createGame("Bélgica", "x", "Irã") +
  //   createGame("Uruguai", "x", "Cabo Verde") +
  //   createGame("Nova Zelândia", "x", "Egito") 
  // ) +

  // createCard('22/06', 'segunda',  
  //   createGame("Argentina", "x", "Áustria") +
  //   createGame("França", "x", "Iraque") +    
  //   createGame("Noruega", "x", "Senegal") 
  // ) +

// createCard('23/06', 'terça',
//   // createGame("Jordânia", "x", "Argélia") +
//   // createGame("Portugal", "x", "Uzbeq.") +
//   // createGame("Inglaterra", "x", "Gana") +
//   createGame("Panamá", "x", "Croácia") + 
//   createGame("Colômbia", "x", "Congo") 
// ) +

// createCard('24/06', 'quarta',
//    createGame("Suíça", "x", "Canadá") +
//    createGame("Bósnia e Herz.", "x", "Catar") +
//   createGame("Escócia", "x", "Brasil") +
//   createGame("Marrocos", "x", "Haiti") +
//   createGame("México", "x", "Suécia") +
//   createGame("África do Sul", "x", "Coreia do Sul") 
// ) +

createCard('25/06', 'quinta',
  // createGame("Equador", "x", "Alemanha") +
  // createGame("Curaçau", "x", "Costa do Marfim") +
  // createGame("Japão", "x", "Suécia") +
  // createGame("Tunísia", "x", "Holanda") +
  createGame("Turquia", "x", "EUA") +
  createGame("Paraguai", "x", "Austrália") 
) +

createCard('26/06', 'sexta',
  createGame("Senegal", "x", "Iraque") +
  createGame("Noruega", "x", "França") +
  createGame("Uruguai", "x", "Espanha") +
  createGame("Cabo Verde", "x", "Arábia Saudita") 
) +

createCard('27/06', 'sábado',
  createGame("Egito", "x", "Irã") +
  createGame("Nova Zelândia", "x", "Bélgica") +
  createGame("Panamá", "x", "Inglaterra") +
  createGame("Croácia", "x", "Gana") +
  createGame("Colômbia", "x", "Portugal") +
  createGame("Congo", "x", "Uzbeq.") +
  createGame("Jordânia", "x", "Argentina") +
  createGame("Argélia", "x", "Áustria")    
)  +

// 👑 DIVISOR: 16 AVOS DE FINAL
`<div class="fase-divisor" style="width: 100%; text-align: center; margin: 40px 0 20px; color: #f7dd43; font-family: sans-serif; font-size: 1.5rem; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">⚡ 16 Avos de Final ⚡</div>` +

createCard('28/06 a 29/06', 'domingo e segunda', 
  createGame("África do Sul", "x", "canadá") +
  createGame("Brasil", "x", "Japão") +
  // createGame("Alemanha", "x", "3º A/B/C/D/F") +
  createGame("Holanda", "x", "Marrocos")   
) /*+

createCard('30/06 a 01/07', 'terça e quarta',
  createGame("Costa do Marfim", "x", "2º Grupo I(França ou Noruega)") +
  createGame("1º Grupo I(França ou Noruega)", "x", "3º C/D/F/G/H") +
  createGame("México", "x", "3º C/E/F/H/I") +
  createGame("1º Grupo L", "x", "3º E/H/I/J/K") +  
  createGame("1º Grupo G", "x", "3º A/E/H/I/J") + 
  createGame("EUA", "x", "3º B/E/F/I/J") 
) + 

createCard('02/07 a 03/07', 'quinta e sexta',
  createGame("1º Grupo H", "x", "2º Grupo J") +
  createGame("2º Grupo K", "x", "2º Grupo L") +
  createGame("Suiça", "x", "3º E/F/G/I/J") +
  createGame("2º Grupo D", "x", "2º Grupo G") +  
  createGame("1º Grupo G", "x", "3º A/E/H/I/J") + 
  createGame("Argentina", "x", "2º Grupo H") +
  createGame("1º Grupo K", "x", "3º D/E/I/J/L")  
) +

// 👑 DIVISOR: OITAVAS DE FINAL
`<div class="fase-divisor" style="width: 100%; text-align: center; margin: 40px 0 20px; color: #f7dd43; font-family: sans-serif; font-size: 1.5rem; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">🔥 Oitavas de Final 🔥</div>` +

createCard('04/07 a 07/07', 'OITAVAS DE FINAL',
  createGame("Vencedor 74", "x", "Vencedor 75") +
  createGame("Vencedor 73", "x", "Vencedor 76") +
  createGame("Vencedor 78", "x", "Vencedor 77") +
  createGame("Vencedor 79", "x", "Vencedor 80") +
  createGame("Vencedor 82", "x", "Vencedor 81") +
  createGame("Vencedor 84", "x", "Vencedor 83") +
  createGame("Vencedor 85", "x", "Vencedor 88") +
  createGame("Vencedor 86", "x", "Vencedor 87")
) +

// 👑 DIVISOR: QUARTAS DE FINAL
`<div class="fase-divisor" style="width: 100%; text-align: center; margin: 40px 0 20px; color: #f7dd43; font-family: sans-serif; font-size: 1.5rem; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">💪 Quartas de Final 💪</div>` +

createCard('09/07 a 11/07', 'QUARTAS DE FINAL',
  createGame("Vencedor 90", "x", "Vencedor 89") +
  createGame("Vencedor 91", "x", "Vencedor 92") +
  createGame("Vencedor 93", "x", "Vencedor 94") +
  createGame("Vencedor 95", "x", "Vencedor 96")
) +

// 👑 DIVISOR: SEMIFINAIS
`<div class="fase-divisor" style="width: 100%; text-align: center; margin: 40px 0 20px; color: #f7dd43; font-family: sans-serif; font-size: 1.5rem; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">🏁 Semifinais 🏁</div>` +

createCard('14/07 a 15/07', 'SEMIFINAL',
  createGame("Vencedor 97", "x", "Vencedor 98") +
  createGame("Vencedor 99", "x", "Vencedor 100")
) +

// 👑 DIVISOR: DECISÕES FINAIS
`<div class="fase-divisor" style="width: 100%; text-align: center; margin: 40px 0 20px; color: #f7dd43; font-family: sans-serif; font-size: 1.5rem; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">✨ Finais ✨</div>` +

createCard('18/07 e 19/07', 'FINAIS',
  createGame("Perdedor 101", "3º LUGAR", "Perdedor 102") +
  createGame("Vencedor 101", "GRANDE FINAL", "Vencedor 102")
) +

  // 🥇 BLOCO DO PÓDIO: Agora limpo, usando as classes do CSS!
  `
    <div class="card card-podio" style="animation-delay: 2.4s;">
      <h2>🏆 PÓDIO DA COPA</h2>
      
      <div class="taca-container">
        <img src="worldcup_favicon.png" alt="Taça da Copa">
        <h3>Campeão</h3>
      </div>

      <ul class="podio-lista">
        <li>
          <span style="color: #f7dd43;">🥇 1º lugar</span>
          <strong>Vencedor 104</strong>
        </li>
        <li>
          <span style="color: #d1d1d1;">🥈 2º lugar</span>
          <strong>Perdedor 104</strong>
        </li>
        <li>
          <span style="color: #e5a93b;">🥉 3º lugar</span>
          <strong>Vencedor 103</strong>
        </li>
        <li>
          <span style="color: #a1a1a1;">🏅 4º lugar</span>
          <strong>Perdedor 103</strong>
        </li>
      </ul>
    </div>
  `
  */ ;
