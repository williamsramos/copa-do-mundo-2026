// 🔥 NORMALIZAR NOMES (aceita brasil, Brasil, BRAZIL, etc)
function normalizar(nome) {
  return nome
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/\s+/g, "_");
}

// 🔥 PEGAR BANDEIRA DO script.js
function getBandeira(time){
  const chave = Object.keys(bandeiras).find(
    k => normalizar(k) === normalizar(time)
  );

  if(!chave) return "";

  const code = bandeiras[chave];

  return `<img src="https://flagcdn.com/w40/${code}.png" style="width:20px;">`;
}

// 🔥 CRIAR JOGO
function createGame(player1, hour, player2) {
  return `
    <li>
      <div class="team">
        ${getBandeira(player1)} ${player1}
      </div>

      <strong>${hour}</strong>

      <div class="team">
        ${player2} ${getBandeira(player2)}
      </div>
    </li>
  `;
}

// 🔥 ANIMAÇÃO DOS CARDS
// let delay = -0.4;

// function createCard(date, day, games) {
//   delay = delay + 0.4;

//   return `
//     <div class="card" style="animation-delay: ${delay}s">
//       <h2>${date} <span>${day}</span></h2>
//       <ul>
//         ${games}
//       </ul>
//     </div>
//   `;
// }


let delay = -0.4;

function createCard(date, day, games) {
  delay = delay + 0.4;

  // conta quantos jogos existem
  const jogosCount = (games.match(/<li>/g) || []).length;

  // adiciona classe se tiver 2 ou mais jogos
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


// 🔥 RENDERIZAR NA TELA
document.querySelector("#cards").innerHTML =
  createCard('11/06', 'sábado',
    createGame("México", "x", "África do Sul") +
    createGame("Coreia do Sul", "x", "República Tcheca")
  ) +

  createCard('12/06', 'sexta',
    createGame("Canadá", "x", "Bósnia e Hern") +
    createGame("Catar", "x", "Suiça") +
    createGame("EUA", "x", "Paraguai") +
    createGame("Austrália", "x", "Turquia")
  ) +

  createCard('13/06', 'sábado',
    createGame("Brasil", "x", "Marrocos") +
    createGame("Haiti", "x", "Escócia") 
  ) +

  createCard('14/06', 'domingo',
    createGame("Alemanha", "x", "Curaçau") +
    createGame("Costa do Marfim", "x", "Equador") +
    createGame("Holanda", "x", "Japão") +
    createGame("Bósnia e Herz.", "x", "Tunisia")  
  ) +

  createCard('15/06', 'segunda',
    createGame("Bélgica", "x", "Egito") +
    createGame("Irã", "x", "Nova Zelândia") +
    createGame("Espanha", "x", "Cabo Verde") +
    createGame("Arabia Saudita", "x", "Uruguai")
  ) +

  createCard('16/06', 'terça',
    createGame("França", "x", "Senegal") +
    createGame("Iraque", "x", "Noruega") +   
    createGame("Argentina", "x", "Argélia") +
    createGame("Áustria", "x", "Jordânia")
  ) +

  createCard('17/06', 'quarta',
    createGame("Portugal", "x", "RD_Congo") +
    createGame("Uzbequistão", "x", "Colômbia") +
    createGame("Inglaterra", "x", "Croácia") +
    createGame("Gana", "x", "Panamá") + 
    createGame("México", "x", "Coreia do Sul") +
    createGame("Àfrica do Sul", "x", "República Tcheca")
  ) +

  createCard('18/06', 'quinta',
    createGame("Canadá", "x", "Catar") +
    createGame("Bósnia e Hern", "x", "Suiça")
  ) +

  createCard('19/06', 'sexta',
    createGame("Escócia", "x", "Marrocos") +
    createGame("Brasil", "x", "Haiti") +    
    createGame("República Tcheca", "x", "Paraguai") +
    createGame("EUA", "x", "Austrália") 
  ) +

  createCard('20/06', 'sabado',
    createGame("Alemanha", "x", "Costa do Marfim") +
    createGame("Equador", "x", "Curaçau") 
  ) +

  createCard('21/06', 'domingo',
    createGame("Holanda", "x", "Bósnia e Herz.") +
    createGame("Tunisia", "x", "Japão") +
    createGame("Bélgica", "x", "Irã") +
    createGame("Nova Zelândia", "x", "Egito") 
  ) +

  createCard('22/06', 'segunda',
    createGame("Espanha", "x", "Arabia Saudita") +
    createGame("Uruguai", "x", "Cabo Verde") +  
    createGame("França", "x", "Iraque") +    
    createGame("Noruega", "x", "Senegal") 
  ) +

  createCard('23/06', 'terça',
    createGame("Argentina", "x", "Àustria") +
    createGame("Jordânia", "x", "Argélia") +
    createGame("Portugal", "x", "Uzbequistão") +
    createGame("Colômbia", "x", "RD_Congo")+
    createGame("Inglaterra", "x", "Gana") +
    createGame("Croácia", "x", "Panamá")
  ) +

  createCard('24/06', 'quarta',
    createGame("México", "x", "Suécia") +
    createGame("Àfrica do Sul", "x", "Coreia do Sul") +
    createGame("Suiça", "x", "Canadá") +
    createGame("Turquia", "x", "Catar") +
    createGame("Escócia", "x", "Brasil") +
    createGame("Marrocos", "x", "Haiti")
  ) +

  createCard('25/06', 'quinta',
    createGame("República Tcheca", "x", "EUA") +
    createGame("Paraguai", "x", "Austrália") +
    createGame("Equador", "x", "Alemanha") +
    createGame("Curaçau", "x", "Costa do Marfim")
  ) +

  createCard('26/06', 'sexta',
    createGame("Tunisia", "x", "Holanda") +
    createGame("Japão", "x",   "Bósnia e Herz.") +
    createGame("Nova Zelândia", "x", "Bélgica") +
    createGame("Egito", "x", "Irã") +
    createGame("Uruguai", "x", "Espanha") +
    createGame("Cabo Verde", "x", "Arabia Saudita")

  ) +

  createCard('27/06', 'sabado',
    createGame("Noruega", "x", "França") +
    createGame("Senegal", "x", "Iraque") +
    createGame("Jordânia", "x", "Argentina") +
    createGame("Argélia", "x", "Àustria") +     
    createGame("Colômbia", "x", "Portugal") +
    createGame("RD_Congo", "x", "Uzbequistão") +
    createGame("Panamá", "x", "Inglaterra") +
    createGame("Croácia", "x", "Gana")
  );

  //Fase de Mata Mata 

//   createCard('28/06', 'domingo',
//     createGame("", "", "") +
//     createGame("", "", "")
//   ) +

//   createCard('29/06', 'segunda',
//     createGame("", "", "
//   ) +

//   createCard('/', '',
//     createGame("", "", "")
//   ) +

//   createCard('/', '',
//     createGame("", "", "")
//   ) +

//   createCard('/', '',
//     createGame("", "", "")
//   );
