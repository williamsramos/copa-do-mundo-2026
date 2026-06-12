/* ================= BANDEIRAS ================= */
const bandeiras = {
  "Brasil":"br","Argentina":"ar","França":"fr","Alemanha":"de",
  "México":"mx","EUA":"us","Canadá":"ca",
  "Espanha":"es","Portugal":"pt","Inglaterra":"gb","Croácia":"hr",
  "Japão":"jp","Austrália":"au","Marrocos":"ma","Senegal":"sn",
  "Uruguai":"uy","Bélgica":"be","Holanda":"nl","Suíça":"ch",
  "Irã":"ir","Egito":"eg","Gana":"gh","Panamá":"pa",
  "Colômbia":"co","Equador":"ec","Paraguai":"py","Noruega":"no",
  "Áustria":"at","Argélia":"dz","Tunísia":"tn","Coreia do Sul":"kr",
  "África do Sul":"za","Catar":"qa","Cabo Verde":"cv","Nova Zelândia":"nz",
  "Haiti":"ht","Costa do Marfim":"ci","Curaçau":"cw","Arábia Saudita":"sa",
  "Uzbequistão":"uz","Jordânia":"jo","Escócia":"gb-sct",  "Turquia":"tr",
  "Bósnia e Herz.":"ba","República Tcheca":"cz", "Suécia":"se","RD_Congo": "cd","Iraque":"iq"
};

function getBandeira(time){
  const code = bandeiras[time];
  if(!code) return "";
  if(code.startsWith("http")){
    return `<img src="${code}" style="width:20px;margin-right:6px;">`;
  }
  return `<img src="https://flagcdn.com/w40/${code}.png" style="width:20px;margin-right:6px;">`;
}

/* ================= GRUPOS ================= */
const grupos = {
  "Grupo A": ["México","África do Sul","Coreia do Sul","República Tcheca"],
  "Grupo B": ["Canadá","Catar","Suíça","Bósnia e Herz."],
  "Grupo C": ["Brasil","Marrocos","Haiti","Escócia"],
  "Grupo D": ["EUA","Paraguai","Austrália","Turquia"],
  "Grupo E": ["Alemanha","Curaçau","Costa do Marfim","Equador"],
  "Grupo F": ["Holanda","Japão","Tunísia","Suécia"],
  "Grupo G": ["Bélgica","Egito","Irã","Nova Zelândia"],
  "Grupo H": ["Espanha","Cabo Verde","Arábia Saudita","Uruguai"],
  "Grupo I": ["França","Senegal","Noruega","Iraque"],
  "Grupo J": ["Argentina","Argélia","Áustria","Jordânia"],
  "Grupo K": ["Portugal","Uzbequistão","Colômbia","RD_Congo"],
  "Grupo L": ["Inglaterra","Croácia","Gana","Panamá"]
};

/* ================= JOGOS DETALHADOS ================= */
const jogosPadrao = [ 
// Grupo A
{ grupo:"Grupo A", rodada:"1ª Rodada", data:"11/06", jogos:[
  { casa:"México", fora:"África do Sul", estadio:"Cidade do México", hora:"16:00", placarCasa:"2", placarFora:"0" },
  { casa:"Coreia do Sul", fora:"República Tcheca", estadio:"Guadalajara", hora:"23:00", placarCasa:"2", placarFora:"1" }
]},
{ grupo:"Grupo A", rodada:"2ª Rodada", data:"18/06", jogos:[
  { casa:"México", fora:"Coreia do Sul", estadio:"Guadalajara", hora:"22:00", placarCasa:"", placarFora:"" },
  { casa:"África do Sul", fora:"República Tcheca", estadio:"Atlanta", hora:"13:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo A", rodada:"3ª Rodada", data:"24/06", jogos:[
  { casa:"México", fora:"República Tcheca", estadio:"Cidade do México", hora:"22:00", placarCasa:"", placarFora:"" },
  { casa:"África do Sul", fora:"Coreia do Sul", estadio:"El Gigante de Acero", hora:"22:00", placarCasa:"", placarFora:"" }
]},
// Grupo B
{ grupo:"Grupo B", rodada:"1ª Rodada", data:"12/06", jogos:[
  { casa:"Canadá", fora:"Bósnia e Herz.", estadio:"Toronto", hora:"16:00", placarCasa:"", placarFora:"" }, 
  { casa:"Catar", fora:"Suíça", estadio:"Santa Clara", data:"13/06", hora:"16:00", placarCasa:"", placarFora:"" } 
]},
{ grupo:"Grupo B", rodada:"2ª Rodada", data:"18/06", jogos:[
  { casa:"Canadá", fora:"Catar", estadio:"Vancouver", hora:"19:00", placarCasa:"", placarFora:"" },
  { casa:"Suíça", fora:"Bósnia e Herz.", estadio:"Los Angeles", hora:"16:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo B", rodada:"3ª Rodada", data:"24/06", jogos:[
  { casa:"Suíça", fora:"Canadá", estadio:"Vancouver", hora:"16:00", placarCasa:"", placarFora:"" },
  { casa:"Bósnia e Herz.", fora:"Catar", estadio:"Seattle", hora:"16:00", placarCasa:"", placarFora:"" }
]},
// Grupo C
{ grupo:"Grupo C", rodada:"1ª Rodada", data:"13/06", jogos:[
  { casa:"Brasil", fora:"Marrocos", estadio:"Nova Jersey", hora:"19:00", placarCasa:"", placarFora:"" },
  { casa:"Haiti", fora:"Escócia", estadio:"Boston", hora:"22:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo C", rodada:"2ª Rodada", data:"19/06", jogos:[
  { casa:"Escócia", fora:"Marrocos", estadio:"Boston", hora:"19:00", placarCasa:"", placarFora:"" },
  { casa:"Brasil", fora:"Haiti", estadio:"Filadélfia", hora:"22:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo C", rodada:"3ª Rodada", data:"24/06", jogos:[
  { casa:"Escócia", fora:"Brasil", estadio:"Miami", hora:"19:00", placarCasa:"", placarFora:"" },
  { casa:"Marrocos", fora:"Haiti", estadio:"Atlanta", hora:"19:00", placarCasa:"", placarFora:"" }
]},
 // Grupo D
{ grupo:"Grupo D", rodada:"1ª Rodada", data:"12/06", jogos:[
  { casa:"EUA", fora:"Paraguai", estadio:"Los Angeles", hora:"22:00", placarCasa:"", placarFora:"" }, 
  { casa:"Austrália", fora:"Turquia", estadio:"Vancouver", data:"13/06", hora:"01:00", placarCasa:"", placarFora:"" } 
]},
{ grupo:"Grupo D", rodada:"2ª Rodada", data:"19/06", jogos:[
  { casa:"Turquia", fora:"Paraguai", estadio:"Santa Clara", data:"20/06" , hora:"00:00", placarCasa:"", placarFora:"" },
  { casa:"EUA", fora:"Austrália", estadio:"Seattle Field", hora:"16:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo D", rodada:"3ª Rodada", data:"25/06", jogos:[
  { casa:"Turquia", fora:"EUA", estadio:"Los Angeles", hora:"23:00", placarCasa:"", placarFora:"" },
  { casa:"Paraguai", fora:"Austrália", estadio:"Santa Clara", hora:"23:00", placarCasa:"", placarFora:"" }
]},
// Grupo E
{ grupo:"Grupo E", rodada:"1ª Rodada", data:"14/06", jogos:[
  { casa:"Alemanha", fora:"Curaçau", estadio:"Houston", hora:"14:00", placarCasa:"", placarFora:"" },
  { casa:"Costa do Marfim", fora:"Equador", estadio:"Filadélfia", hora:"20:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo E", rodada:"2ª Rodada", data:"20/06", jogos:[
  { casa:"Alemanha", fora:"Costa do Marfim", estadio:"Toronto", hora:"17:00", placarCasa:"", placarFora:"" },
  { casa:"Equador", fora:"Curaçau", estadio:"Kansas City", hora:"21:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo E", rodada:"3ª Rodada", data:"25/06", jogos:[
  { casa:"Equador", fora:"Alemanha", estadio:"Nova Jersey", hora:"17:00", placarCasa:"", placarFora:"" },
  { casa:"Curaçau", fora:"Costa do Marfim", estadio:"Filadélfia", hora:"17:00", placarCasa:"", placarFora:"" }
]},
// Grupo F
{ grupo:"Grupo F", rodada:"1ª Rodada", data:"14/06", jogos:[
  { casa:"Holanda", fora:"Japão", estadio:"Dallas", hora:"17:00", placarCasa:"", placarFora:"" },
  { casa:"Suécia", fora:"Tunísia", estadio:"Monterrey", hora:"23:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo F", rodada:"2ª Rodada", data:"20/06", jogos:[
  { casa:"Holanda", fora:"Suécia", estadio:"Houston", hora:"14:00", placarCasa:"", placarFora:"" },
  { casa:"Tunísia", fora:"Japão", estadio:"Cidade do México", data:"21/06" , hora:"01:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo F", rodada:"3ª Rodada", data:"26/06", jogos:[
  { casa:"Tunísia", fora:"Holanda", estadio:"Kansas City", hora:"20:00", placarCasa:"", placarFora:"" },
  { casa:"Japão", fora:"Suécia", estadio:"Dallas", hora:"20:00", placarCasa:"", placarFora:"" }
]},
// Grupo G
{ grupo:"Grupo G", rodada:"1ª Rodada", data:"15/06", jogos:[
  { casa:"Bélgica", fora:"Egito", estadio:"Seattle Field", hora:"16:00", placarCasa:"", placarFora:"" },
  { casa:"Irã", fora:"Nova Zelândia", estadio:"Los Angeles", hora:"22:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo G", rodada:"2ª Rodada", data:"21/06", jogos:[
  { casa:"Bélgica", fora:"Irã", estadio:"Los Angeles", hora:"16:00", placarCasa:"", placarFora:"" },
  { casa:"Nova Zelândia", fora:"Egito", estadio:"Vancouver Place", hora:"22:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo G", rodada:"3ª Rodada", data:"27/06", jogos:[
  { casa:"Nova Zelândia", fora:"Bélgica", estadio:"Seattle Field", hora:"00:00", placarCasa:"", placarFora:"" },
  { casa:"Egito", fora:"Irã", estadio:"Vancouver Place", hora:"00:00", placarCasa:"", placarFora:"" }
]},
// Grupo H
{ grupo:"Grupo H", rodada:"1ª Rodada", data:"15/06", jogos:[
  { casa:"Espanha", fora:"Cabo Verde", estadio:"Atlanta", hora:"13:00", placarCasa:"", placarFora:"" },
  { casa:"Arábia Saudita", fora:"Uruguai", estadio:"Miami", hora:"19:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo H", rodada:"2ª Rodada", data:"21/06", jogos:[
  { casa:"Espanha", fora:"Arábia Saudita", estadio:"Atlanta", hora:"13:00", placarCasa:"", placarFora:"" },
  { casa:"Uruguai", fora:"Cabo Verde", estadio:"Miami", hora:"19:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo H", rodada:"3ª Rodada", data:"26/06", jogos:[
  { casa:"Uruguai", fora:"Espanha", estadio:"Houston", hora:"21:00", placarCasa:"", placarFora:"" },
  { casa:"Cabo Verde", fora:"Arábia Saudita", estadio:"Akron", hora:"21:00", placarCasa:"", placarFora:"" }
]},
// Grupo I
{ grupo:"Grupo I", rodada:"1ª Rodada", data:"16/06", jogos:[
  { casa:"França", fora:"Senegal", estadio:"Nova Jersey", hora:"16:00", placarCasa:"", placarFora:"" },
  { casa:"Iraque", fora:"Noruega", estadio:"Boston", hora:"19:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo I", rodada:"2ª Rodada", data:"22/06", jogos:[
  { casa:"França", fora:"Iraque", estadio:"Filadélfia", hora:"18:00", placarCasa:"", placarFora:"" },
  { casa:"Noruega", fora:"Senegal", estadio:"Nova Jersey", hora:"21:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo I", rodada:"3ª Rodada", data:"27/06", jogos:[
  { casa:"Noruega", fora:"França", estadio:"Boston", hora:"16:00", placarCasa:"", placarFora:"" },
  { casa:"Senegal", fora:"Iraque", estadio:"Toronto Field", hora:"16:00", placarCasa:"", placarFora:"" }
]},
// Grupo J
{ grupo:"Grupo J", rodada:"1ª Rodada", data:"16/06", jogos:[
  { casa:"Argentina", fora:"Argélia", estadio:"Kansas City", hora:"22:00", placarCasa:"", placarFora:"" },
  { casa:"Áustria", fora:"Jordânia", estadio:"Santa Clara", data: "17/06" , hora:"01:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo J", rodada:"2ª Rodada", data:"22/06", jogos:[
  { casa:"Argentina", fora:"Áustria", estadio:"Dallas", hora:"14:00", placarCasa:"", placarFora:"" },
  { casa:"Jordânia", fora:"Argélia", estadio:"Santa Clara", hora:"00:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo J", rodada:"3ª Rodada", data:"27/06", jogos:[
  { casa:"Jordânia", fora:"Argentina", estadio:"Dallas", hora:"23:00", placarCasa:"", placarFora:"" },
  { casa:"Argélia", fora:"Áustria", estadio:"Kansas City", data:"23/06" , hora:"23:00", placarCasa:"", placarFora:"" }
]},
// Grupo K
{ grupo:"Grupo K", rodada:"1ª Rodada", data:"17/06", jogos:[
  { casa:"Portugal", fora:"RD_Congo", estadio:"Houston", hora:"14:00", placarCasa:"", placarFora:"" },
  { casa:"Uzbequistão", fora:"Colômbia", estadio:"Azteca", hora:"23:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo K", rodada:"2ª Rodada", data:"23/06", jogos:[
  { casa:"Portugal", fora:"Uzbequistão", estadio:"Houston", hora:"14:00", placarCasa:"", placarFora:"" },
  { casa:"Colômbia", fora:"RD_Congo", estadio:"Akron", hora:"23:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo K", rodada:"3ª Rodada", data:"27/06", jogos:[
  { casa:"Colômbia", fora:"Portugal", estadio:"Miami", hora:"20:30", placarCasa:"", placarFora:"" },
  { casa:"RD_Congo", fora:"Uzbequistão", estadio:"Atlanta", hora:"20:30", placarCasa:"", placarFora:"" }
]},
// Grupo L
{ grupo:"Grupo L", rodada:"1ª Rodada", data:"17/06", jogos:[
  { casa:"Inglaterra", fora:"Croácia", estadio:"Dallas", hora:"17:00", placarCasa:"", placarFora:"" },
  { casa:"Gana", fora:"Panamá", estadio:"Toronto Field", hora:"20:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo L", rodada:"2ª Rodada", data:"23/06", jogos:[
  { casa:"Inglaterra", fora:"Gana", estadio:"Boston", hora:"17:00", placarCasa:"", placarFora:"" },
  { casa:"Panamá", fora:"Croácia", estadio:"Toronto Field", hora:"20:00", placarCasa:"", placarFora:"" }
]},
{ grupo:"Grupo L", rodada:"3ª Rodada", data:"27/06", jogos:[
  { casa:"Panamá", fora:"Inglaterra", estadio:"Nova Jersey", hora:"18:00", placarCasa:"", placarFora:"" },
  { casa:"Croácia", fora:"Gana", estadio:"Filadélfia", hora:"18:00", placarCasa:"", placarFora:"" }
]},

// ================= MATA-MATA =================
{ grupo:"Mata-mata", rodada:"16 avos de Final", data:"28/06 a 03/07", jogos:[
  { "id": 73, "casa": "2º Grupo A", "fora": "2º Grupo B", "estadio": "Inglewood", "data": "28/06", "hora": "16:00", "placarCasa": "", "placarFora": "", "penaisCasa": "", "penaisFora": "" },
  { "id": 74, "casa": "1º Grupo E", "fora": "3º A/B/C/D/F", "estadio": "Foxborough", "data": "29/06", "hora": "17:30", "placarCasa": "", "placarFora": "", "penaisCasa": "", "penaisFora": "" },
  { "id": 75, "casa": "1º Grupo F", "fora": "2º Grupo C", "estadio": "Monterrey", "data": "29/06", "hora": "22:00", "placarCasa": "", "placarFora": "", "penaisCasa": "", "penaisFora": "" },
  { "id": 76, "casa": "1º Grupo C", "fora": "2º Grupo F", "estadio": "Houston", "data": "29/06", "hora": "14:00", "placarCasa": "", "placarFora": "", "penaisCasa": "", "penaisFora": "" },
  { "id": 77, "casa": "1º Grupo I", "fora": "3º C/D/F/G/H", "estadio": "East Rutherford", "data": "30/06", "hora": "18:00", "placarCasa": "", "placarFora": "", "penaisCasa": "", "penaisFora": "" },
  { "id": 78, "casa": "2º Grupo E", "fora": "2º Grupo I", "estadio": "Arlington", "data": "30/06", "hora": "14:00", "placarCasa": "", "placarFora": "", "penaisCasa": "", "penaisFora": "" },
  { "id": 79, "casa": "1º Grupo A", "fora": "3º C/E/F/H/I", "estadio": "Cidade do México", "data": "30/06", "hora": "22:00", "placarCasa": "", "placarFora": "", "penaisCasa": "", "penaisFora": "" },
  { "id": 80, "casa": "1º Grupo L", "fora": "3º E/H/I/J/K", "estadio": "Atlanta", "data": "01/07", "hora": "13:00", "placarCasa": "", "placarFora": "", "penaisCasa": "", "penaisFora": "" },
  { "id": 82, "casa": "1º Grupo G", "fora": "3º A/E/H/I/J", "estadio": "Seattle", "data": "01/07", "hora": "17:00", "placarCasa": "", "placarFora": "", "penaisCasa": "", "penaisFora": "" },
  { "id": 81, "casa": "1º Grupo D", "fora": "3º B/E/F/I/J", "estadio": "Santa Clara", "data": "01/07", "hora": "21:00", "placarCasa": "", "placarFora": "", "penaisCasa": "", "penaisFora": "" },
  { "id": 84, "casa": "1º Grupo H", "fora": "2º Grupo J", "estadio": "Inglewood", "data": "02/07", "hora": "16:00", "placarCasa": "", "placarFora": "", "penaisCasa": "", "penaisFora": "" },
  { "id": 83, "casa": "2º Grupo K", "fora": "2º Grupo L", "estadio": "Toronto", "data": "02/07", "hora": "20:00", "placarCasa": "", "placarFora": "", "penaisCasa": "", "penaisFora": "" },
  { "id": 85, "casa": "1º Grupo B", "fora": "3º E/F/G/I/J", "estadio": "Vancouver", "data": "03/07", "hora": "00:00", "placarCasa": "", "placarFora": "", "penaisCasa": "", "penaisFora": "" },
  { "id": 88, "casa": "2º Grupo D", "fora": "2º Grupo G", "estadio": "Arlington", "data": "03/07", "hora": "15:00", "placarCasa": "", "placarFora": "", "penaisCasa": "", "penaisFora": "" },
  { "id": 86, "casa": "1º Grupo J", "fora": "2º Grupo H", "estadio": "Miami", "data": "03/07", "hora": "19:00", "placarCasa": "", "placarFora": "", "penaisCasa": "", "penaisFora": "" },
  { "id": 87, "casa": "1º Grupo K", "fora": "3º D/E/I/J/L", "estadio": "Kansas City", "data": "03/07", "hora": "22:30", "placarCasa": "", "placarFora": "", "penaisCasa": "", "penaisFora": "" }
]},
{ grupo:"Mata-mata", rodada:"Oitavas de Final", data:"04/07 a 07/07", jogos:[
  { id: 89, casa:"Vencedor 74", fora:"Vencedor 75", estadio:"Filadélfia", data:"04/07", hora:"18:00", placarCasa:"", placarFora:"", penaisCasa:"", penaisFora:"" },
  { id: 90, casa:"Vencedor 73", fora:"Vencedor 76", estadio:"Houston", data:"04/07", hora:"14:00", placarCasa:"", placarFora:"", penaisCasa:"", penaisFora:"" },
  { id: 91, casa:"Vencedor 78", fora:"Vencedor 77", estadio:"East Rutherford", data:"05/07", hora:"17:00", placarCasa:"", placarFora:"", penaisCasa:"", penaisFora:"" },
  { id: 92, casa:"Vencedor 79", fora:"Vencedor 80", estadio:"Cidade do México", data:"05/07", hora:"21:00", placarCasa:"", placarFora:"", penaisCasa:"", penaisFora:"" },
  { id: 93, casa:"Vencedor 82", fora:"Vencedor 81", estadio:"Arlington", data:"06/07", hora:"16:00", placarCasa:"", placarFora:"", penaisCasa:"", penaisFora:"" },
  { id: 94, casa:"Vencedor 84", fora:"Vencedor 83", estadio:"Seattle", data:"06/07", hora:"21:00", placarCasa:"", placarFora:"", penaisCasa:"", penaisFora:"" },
  { id: 95, casa:"Vencedor 85", fora:"Vencedor 88", estadio:"Atlanta", data:"07/07", hora:"13:00", placarCasa:"", placarFora:"", penaisCasa:"", penaisFora:"" },
  { id: 96, casa:"Vencedor 86", fora:"Vencedor 87", estadio:"Vancouver", data:"07/07", hora:"17:00", placarCasa:"", placarFora:"", penaisCasa:"", penaisFora:"" }
]},
{ grupo:"Mata-mata", rodada:"Quartas de Final", data:"09/07 a 11/07", jogos:[
  { id: 97, casa:"Vencedor 90", fora:"Vencedor 89", estadio:"Foxborough", data:"09/07", hora:"17:00", placarCasa:"", placarFora:"", penaisCasa:"", penaisFora:"" },
  { id: 98, casa:"Vencedor 91", fora:"Vencedor 92", estadio:"Inglewood", data:"10/07", hora:"16:00", placarCasa:"", placarFora:"", penaisCasa:"", penaisFora:"" },
  { id: 99, casa:"Vencedor 93", fora:"Vencedor 94", estadio:"Miami", data:"11/07", hora:"18:00", placarCasa:"", placarFora:"", penaisCasa:"", penaisFora:"" },
  { id: 100, casa:"Vencedor 95", fora:"Vencedor 96", estadio:"Vancouver", data:"11/07", hora:"22:00", placarCasa:"", placarFora:"", penaisCasa:"", penaisFora:"" }
]},
{ grupo:"Mata-mata", rodada:"Semifinal", data:"14/07 a 15/07", jogos:[
  { id: 101, casa:"Vencedor 97 (QF V1)", fora:"Vencedor 98 (QF V2)", estadio:"Arlington", data:"14/07", hora:"16:00", placarCasa:"", placarFora:"", penaisCasa:"", penaisFora:"" },
  { id: 102, casa:"Vencedor 99 (QF V3)", fora:"Vencedor 100 (QF V4)", estadio:"Atlanta", data:"15/07", hora:"16:00", placarCasa:"", placarFora:"", penaisCasa:"", penaisFora:"" }
]},
{ grupo:"Mata-mata", rodada:"Finais", data:"18/07 e 19/07", jogos:[
  { id: 103, casa:"Perdedor 101", fora:"Perdedor 102", estadio:"Miami Gardens, Flórida", data:"18/07", hora:"18:00", placarCasa:"", placarFora:"", penaisCasa:"", penaisFora:"" },
  { id: 104, casa:"Vencedor 101", fora:"Vencedor 102", estadio:"East Rutherford, New Jersey", data:"19/07", hora:"16:00", placarCasa:"", placarFora:"", penaisCasa:"", penaisFora:"" }
]}
];


let jogosDetalhados = [];
let tabela = {};
let grupoSelecionado = null;

/* ================= FUNÇÕES PRINCIPAIS ================= */
function init(){
  const salvos = localStorage.getItem("jogosSimulador");
  if (salvos) {
    jogosDetalhados = JSON.parse(salvos);
  } else {
    jogosDetalhados = JSON.parse(JSON.stringify(jogosPadrao)); 
  }

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
}

function selecionarGrupo(grupo){
  grupoSelecionado = grupo === "todos" ? null : group;
  showTab('jogosTab'); 
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
      
      const dataDoJogo = j.data ? j.data : bloco.data;
      const infoEstadio = `🏟️ ${j.estadio} | 📅 ${dataDoJogo}${j.hora ? " ⏰ " + j.hora : ""}${j.id ? " | 🔢 Partida " + j.id : ""}`;

      blocoHtml += `
        <div style="margin-bottom:6px;">
          ${getBandeira(j.casa)} ${j.casa}
          
          <input type="number" min="0" value="${g1}" style="width:55px;" onchange="salvarPlacar(${blocoIndex},${jogoIndex},'casa',this.value)">
          
          ${ehMataMata && deuEmpate ? `<input type="number" min="0" placeholder="PK" value="${p1}" style="width:40px; background:#ffebeb; border:1px solid red; text-align:center;" onchange="salvarPenais(${blocoIndex},${jogoIndex},'casa',this.value)">` : ""}
          
          <strong>x</strong>
          
          ${ehMataMata && deuEmpate ? `<input type="number" min="0" placeholder="PK" value="${p2}" style="width:40px; background:#ffebeb; border:1px solid red; text-align:center;" onchange="salvarPenais(${blocoIndex},${jogoIndex},'fora',this.value)">` : ""}
          
          <input type="number" min="0" value="${g2}" style="width:55px;" onchange="salvarPlacar(${blocoIndex},${jogoIndex},'fora',this.value)">
          
          ${getBandeira(j.fora)} ${j.fora}
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

function salvarPenais(blocoIndex, jogoIndex, lado, valor) {
  if(lado === "casa"){
    jogosDetalhados[blocoIndex].jogos[jogoIndex].penaisCasa = valor;
  } else {
    jogosDetalhados[blocoIndex].jogos[jogoIndex].penaisFora = valor;
  }
  atualizar(true);
}

/* ================= FUNÇÃO ATUALIZAR ================= */
function atualizar(deveRenderizar = true){
  if(!tabela || Object.keys(tabela).length === 0) return;

  for(let g in tabela){
    for(let t in tabela[g]){
      tabela[g][t] = { pts:0, v:0, e:0, d:0, gp:0, gc:0, pos:tabela[g][t].pos };
    }
  }

  jogosDetalhados.forEach(bloco => {
    if(bloco.grupo === "Mata-mata") return; 

    bloco.jogos.forEach(jogo => {
      if(jogo.placarCasa === "" || jogo.placarFora === "") return;

      const g1 = Number(jogo.placarCasa);
      const g2 = Number(jogo.placarFora);
      if(isNaN(g1) || isNaN(g2)) return;

      const grupo = bloco.grupo;
      if(!tabela[grupo]) return;
      const casa = tabela[grupo][jogo.casa];
      const fora = tabela[grupo][jogo.fora];
      if(!casa || !fora) return;

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

  localStorage.setItem("jogosSimulador", JSON.stringify(jogosDetalhados));
  
  if(deveRenderizar) {
    renderJogos();
    renderTabela();
  }
}

function renderTabela(){
  const div = document.getElementById("grupos");
  if(!div) return;
  div.innerHTML = "";

  for(let g in tabela){
    let times = Object.entries(tabela[g]);
    times.sort((a,b)=> (b[1].pts - a[1].pts) || ((b[1].gp - b[1].gc) - (a[1].gp - a[1].gc)) || (a[1].pos - b[1].pos));

    const terceiraRodadaCompleta = times.every(([nome,d])=>{
      return (d.v + d.e + d.d) === 3;
    });

    let html = `
      <div class="card">
        <h3>${g} - Classificação</h3>
        <table>
          <tr><th>Pos</th><th>Time</th><th>P</th><th>J</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th><th>SG</th></tr>
    `;

    times.forEach(([nome,d],i)=>{
      const jogosTotal = d.v + d.e + d.d;
      let classeCSS = "";
      if(terceiraRodadaCompleta){
        if(i === 0 || i === 1) classeCSS = "qualificado";
        else if(i === 2) classeCSS = "terceiro";
      }

      html += `
        <tr class="${classeCSS}">
          <td>${i + 1}</td>
          <td>${getBandeira(nome)} ${nome}</td>
          <td>${d.pts}</td>
          <td>${jogosTotal}</td>
          <td>${d.v}</td>
          <td>${d.e}</td>
          <td>${d.d}</td>
          <td>${d.gp}</td>
          <td>${d.gc}</td>
          <td>${d.gp - d.gc}</td>
        </tr>
      `;
    });
    html += `</table></div>`;
    div.innerHTML += html;
  }
}

function showTab(tabId) {
  const abas = document.querySelectorAll('.tab'); 
  abas.forEach(aba => aba.style.display = 'none');
  const abaAtiva = document.getElementById(tabId);
  if(abaAtiva) abaAtiva.style.display = 'block';
}

/* Inicialização moderna */
document.addEventListener("DOMContentLoaded", () => {
  init();
});
