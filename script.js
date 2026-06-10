
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
  // Se o valor já for URL (repescagem), usa direto
  if(code.startsWith("http")){
    return `<img src="${code}" style="width:20px;margin-right:6px;">`;
  }
  // Senão, assume código de país normal
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
const jogosDetalhados = [
// Grupo A
{ grupo:"Grupo A", rodada:"1ª Rodada", data:"11/06", jogos:[
  {
    casa:"México",
    fora:"África do Sul",
    estadio:"Cidade do México",
    hora:"16:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Coreia do Sul",
    fora:"República Tcheca",
    estadio:"Guadalajara",
    hora:"23:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo A", rodada:"2ª Rodada", data:"17/06", jogos:[
  {
    casa:"México",
    fora:"Coreia do Sul",
    estadio:"Guadalajara",
    hora:"22:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"África do Sul",
    fora:"República Tcheca",
    estadio:"Atlanta",
    hora:"13:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo A", rodada:"3ª Rodada", data:"24/06", jogos:[
  {
    casa:"México",
    fora:"República Tcheca",
    estadio:"Cidade do México",
    hora:"22:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"África do Sul",
    fora:"Coreia do Sul",
    estadio:"El Gigante de Acero",
    hora:"22:00",
    placarCasa:"",
    placarFora:""
  }
]},

// Grupo B
{ grupo:"Grupo B", rodada:"1ª Rodada", data:"12/06", jogos:[
  {
    casa:"Canadá",
    fora:"Bósnia e Herz.",
    estadio:"Toronto",
    hora:"16:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Catar",
    fora:"Suíça",
    estadio:"Santa Clara",
    hora:"16:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo B", rodada:"2ª Rodada", data:"18/06", jogos:[
  {
    casa:"Canadá",
    fora:"Catar",
    estadio:"Vancouver",
    hora:"19:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Suíça",
    fora:"Bósnia e Herz.",
    estadio:"Los Angeles",
    hora:"16:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo B", rodada:"3ª Rodada", data:"24/06", jogos:[
  {
    casa:"Suíça",
    fora:"Canadá",
    estadio:"Vancouver",
    hora:"16:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Bósnia e Herz.",
    fora:"Catar",
    estadio:"Seattle",
    hora:"16:00",
    placarCasa:"",
    placarFora:""
  }
]},

// Grupo C
{ grupo:"Grupo C", rodada:"1ª Rodada", data:"13/06", jogos:[
  {
    casa:"Brasil",
    fora:"Marrocos",
    estadio:"Nova Jersey",
    hora:"19:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Haiti",
    fora:"Escócia",
    estadio:"Boston",
    hora:"22:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo C", rodada:"2ª Rodada", data:"19/06", jogos:[
  {
    casa:"Escócia",
    fora:"Marrocos",
    estadio:"Boston",
    hora:"19:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Brasil",
    fora:"Haiti",
    estadio:"Filadélfia",
    hora:"22:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo C", rodada:"3ª Rodada", data:"24/06", hora:"19:00", jogos:[
  {
    casa:"Escócia",
    fora:"Brasil",
    estadio:"Miami",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Marrocos",
    fora:"Haiti",
    estadio:"Atlanta",
    placarCasa:"",
    placarFora:""
  }
]},

 // Grupo D
{ grupo:"Grupo D", rodada:"1ª Rodada", data:"12/06", jogos:[
  {
    casa:"EUA",
    fora:"Paraguai",
    estadio:"Los Angeles",
    hora:"22:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Austrália",
    fora:"Turquia",
    estadio:"Vancouver",
    hora:"01:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo D", rodada:"2ª Rodada", data:"19/06", jogos:[
  {
    casa:"Turquia",
    fora:"Paraguai",
    estadio:"Santa Clara",
    hora:"01:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"EUA",
    fora:"Austrália",
    estadio:"Seattle Field",
    hora:"16:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo D", rodada:"3ª Rodada", data:"25/06", hora:"23:00", jogos:[
  {
    casa:"Turquia",
    fora:"EUA",
    estadio:"Los Angeles",
    hora:"23:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Paraguai",
    fora:"Austrália",
    estadio:"Santa Clara",
    hora:"23:00",
    placarCasa:"",
    placarFora:""
  }
]},

// Grupo E
{ grupo:"Grupo E", rodada:"1ª Rodada", data:"14/06", jogos:[
  {
    casa:"Alemanha",
    fora:"Curaçau",
    estadio:"Houston",
    hora:"14:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Costa do Marfim",
    fora:"Equador",
    estadio:"Filadélfia",
    hora:"20:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo E", rodada:"2ª Rodada", data:"20/06", jogos:[
  {
    casa:"Alemanha",
    fora:"Costa do Marfim",
    estadio:"Toronto",
    hora:"17:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Equador",
    fora:"Curaçau",
    estadio:"Kansas City",
    hora:"21:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo E", rodada:"3ª Rodada", data:"25/06", jogos:[
  {
    casa:"Equador",
    fora:"Alemanha",
    estadio:"Nova Jersey",
    hora:"17:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Curaçau",
    fora:"Costa do Marfim",
    estadio:"Filadélfia",
    hora:"17:00",
    placarCasa:"",
    placarFora:""
  }
]},

// Grupo F
{ grupo:"Grupo F", rodada:"1ª Rodada", data:"14/06", jogos:[
  {
    casa:"Holanda",
    fora:"Japão",
    estadio:"Dallas",
    hora:"17:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Suécia",
    fora:"Tunísia",
    estadio:"Monterrey",
    hora:"23:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo F", rodada:"2ª Rodada", data:"21/06", jogos:[
  {
    casa:"Holanda",
    fora:"Suécia",
    estadio:"Houston",
    hora:"14:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Tunísia",
    fora:"Japão",
    estadio:"Cidade do México",
    hora:"01:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo F", rodada:"3ª Rodada", data:"26/06", jogos:[
  {
    casa:"Tunísia",
    fora:"Holanda",
    estadio:"Kansas City",
    hora:"20:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Japão",
    fora:"Suécia",
    estadio:"Dallas",
    hora:"20:00",
    placarCasa:"",
    placarFora:""
  }
]},

// Grupo G
{ grupo:"Grupo G", rodada:"1ª Rodada", data:"15/06", jogos:[
  {
    casa:"Bélgica",
    fora:"Egito",
    estadio:"Seattle Field",
    hora:"16:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Irã",
    fora:"Nova Zelândia",
    estadio:"Los Angeles",
    hora:"22:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo G", rodada:"2ª Rodada", data:"21/06", jogos:[
  {
    casa:"Bélgica",
    fora:"Irã",
    estadio:"Los Angeles",
    hora:"16:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Nova Zelândia",
    fora:"Egito",
    estadio:"Vancouver Place",
    hora:"22:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo G", rodada:"3ª Rodada", data:"26/06", jogos:[
  {
    casa:"Nova Zelândia",
    fora:"Bélgica",
    estadio:"Seattle Field",
    hora:"00:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Egito",
    fora:"Irã",
    estadio:"Vancouver Place",
    hora:"00:00",
    placarCasa:"",
    placarFora:""
  }
]},

// Grupo H
{ grupo:"Grupo H", rodada:"1ª Rodada", data:"15/06", jogos:[
  {
    casa:"Espanha",
    fora:"Cabo Verde",
    estadio:"Atlanta",
    hora:"13:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Arábia Saudita",
    fora:"Uruguai",
    estadio:"Miami",
    hora:"19:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo H", rodada:"2ª Rodada", data:"22/06", jogos:[
  {
    casa:"Espanha",
    fora:"Arábia Saudita",
    estadio:"Atlanta",
    hora:"13:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Uruguai",
    fora:"Cabo Verde",
    estadio:"Miami",
    hora:"19:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo H", rodada:"3ª Rodada", data:"26/06", jogos:[
  {
    casa:"Uruguai",
    fora:"Espanha",
    estadio:"Houston",
    hora:"21:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Cabo Verde",
    fora:"Arábia Saudita",
    estadio:"Akron",
    hora:"21:00",
    placarCasa:"",
    placarFora:""
  }
]},

// Grupo I
{ grupo:"Grupo I", rodada:"1ª Rodada", data:"16/06", jogos:[
  {
    casa:"França",
    fora:"Senegal",
    estadio:"Nova Jersey",
    hora:"16:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Iraque",
    fora:"Noruega",
    estadio:"Boston",
    hora:"19:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo I", rodada:"2ª Rodada", data:"22/06", jogos:[
  {
    casa:"França",
    fora:"Iraque",
    estadio:"Filadélfia",
    hora:"18:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Noruega",
    fora:"Senegal",
    estadio:"Nova Jersey",
    hora:"21:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo I", rodada:"3ª Rodada", data:"27/06", jogos:[
  {
    casa:"Noruega",
    fora:"França",
    estadio:"Boston",
    hora:"16:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Senegal",
    fora:"Iraque",
    estadio:"Toronto Field",
    hora:"16:00",
    placarCasa:"",
    placarFora:""
  }
]},

// Grupo J
{ grupo:"Grupo J", rodada:"1ª Rodada", data:"16/06", jogos:[
  {
    casa:"Argentina",
    fora:"Argélia",
    estadio:"Kansas City",
    hora:"22:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Áustria",
    fora:"Jordânia",
    estadio:"Santa Clara",
    hora:"01:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo J", rodada:"2ª Rodada", data:"23/06", jogos:[
  {
    casa:"Argentina",
    fora:"Áustria",
    estadio:"Dallas",
    hora:"14:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Jordânia",
    fora:"Argélia",
    estadio:"Santa Clara",
    hora:"00:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo J", rodada:"3ª Rodada", data:"27/06", jogos:[
  {
    casa:"Jordânia",
    fora:"Argentina",
    estadio:"Dallas",
    hora:"23:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Argélia",
    fora:"Áustria",
    estadio:"Kansas City",
    hora:"23:00",
    placarCasa:"",
    placarFora:""
  }
]},

// Grupo K
{ grupo:"Grupo K", rodada:"1ª Rodada", data:"17/06", jogos:[
  {
    casa:"Portugal",
    fora:"RD_Congo",
    estadio:"Houston",
    hora:"14:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Uzbequistão",
    fora:"Colômbia",
    estadio:"Azteca",
    hora:"23:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo K", rodada:"2ª Rodada", data:"23/06", jogos:[
  {
    casa:"Portugal",
    fora:"Uzbequistão",
    estadio:"Houston",
    hora:"14:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Colômbia",
    fora:"RD_Congo",
    estadio:"Akron",
    hora:"23:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo K", rodada:"3ª Rodada", data:"27/06", jogos:[
  {
    casa:"Colômbia",
    fora:"Portugal",
    estadio:"Miami",
    hora:"20:30",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"RD_Congo",
    fora:"Uzbequistão",
    estadio:"Atlanta",
    hora:"20:30",
    placarCasa:"",
    placarFora:""
  }
]},

// Grupo L
{ grupo:"Grupo L", rodada:"1ª Rodada", data:"17/06", jogos:[
  {
    casa:"Inglaterra",
    fora:"Croácia",
    estadio:"Dallas",
    hora:"17:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Gana",
    fora:"Panamá",
    estadio:"Toronto Field",
    hora:"20:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo L", rodada:"2ª Rodada", data:"23/06", jogos:[
  {
    casa:"Inglaterra",
    fora:"Gana",
    estadio:"Boston",
    hora:"17:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Panamá",
    fora:"Croácia",
    estadio:"Toronto Field",
    hora:"20:00",
    placarCasa:"",
    placarFora:""
  }
]},
{ grupo:"Grupo L", rodada:"3ª Rodada", data:"27/06", jogos:[
  {
    casa:"Panamá",
    fora:"Inglaterra",
    estadio:"Nova Jersey",
    hora:"18:00",
    placarCasa:"",
    placarFora:""
  },
  {
    casa:"Croácia",
    fora:"Gana",
    estadio:"Filadélfia",
    hora:"18:00",
    placarCasa:"",
    placarFora:""
  }
]}
];

/* ================= VARIÁVEIS ================= */
let tabela = {};


/* ================= FUNÇÕES PRINCIPAIS ================= */

let grupoSelecionado = null; // null significa "todos"

function init(){
  tabela = {};
  for(let g in grupos){
    tabela[g] = {};
    grupos[g].forEach((t,i)=>{
      tabela[g][t] = { pts:0, v:0, e:0, d:0, gp:0, gc:0, pos:i+1 };
    });
  }
  criarAbas();
  renderJogos();
  renderTabela();
}

function criarAbas(){
  const div = document.getElementById("abasGrupos");
  if(!div) return;
  div.innerHTML = "";
  div.innerHTML += `<button onclick="selecionarGrupo('todos')" id="aba-todos">Todos</button>`;
  for(let g in grupos){
    div.innerHTML += `<button onclick="selecionarGrupo('${g}')" id="aba-${g}">${g}</button>`;
  }
}

function selecionarGrupo(grupo){
  grupoSelecionado = grupo === "todos" ? null : grupo;
  renderJogos();
  renderTabela();
  destacarAba();
}

function destacarAba(){
  Object.keys(grupos).concat(["todos"]).forEach(g=>{
    const btn = document.getElementById(`aba-${g}`);
    if(!btn) return;
    btn.classList.remove("ativo");
    if((g==="todos" && !grupoSelecionado) || g===grupoSelecionado) btn.classList.add("ativo");
  });
}

function renderJogos(){
  const div = document.getElementById("jogos");
  if (!div) return;
  div.innerHTML = "";
  jogosDetalhados.forEach((bloco, idx)=>{
    if(grupoSelecionado && bloco.grupo!==grupoSelecionado) return;
    div.innerHTML += `<div class="card"><h3>${bloco.grupo} - ${bloco.rodada}</h3>`;

    bloco.jogos.forEach((j,i)=>{
      const id = `${idx}-${i}`;
      const g1 = localStorage.getItem(`placar-${id}-casa`) || "";
      const g2 = localStorage.getItem(`placar-${id}-fora`) || "";

      const infoEstadio = `🏟️ ${j.estadio} | 📅 ${bloco.data}${j.hora ? " ⏰ " + j.hora : ""}`;

      // Corrigido com oninput: Salva no localStorage e atualiza a tabela na hora que digita
      div.innerHTML += `<div style="margin-bottom:6px;">
        ${getBandeira(j.casa)} ${j.casa} 
         <input type="number"
    id="g1-${id}"
    value="${g1}"
    style="width:40px;margin:0 4px;"
    onwheel="this.blur()"
    inputmode="numeric"
    onkeydown="if(event.key==='ArrowUp'||event.key==='ArrowDown') event.preventDefault()"
    oninput="localStorage.setItem('placar-${id}-casa', this.value); atualizar();"
  />

  x

  <input type="number"
    id="g2-${id}"
    value="${g2}"
    style="width:40px;margin:0 4px;"
    onwheel="this.blur()"
    inputmode="numeric"
    onkeydown="if(event.key==='ArrowUp'||event.key==='ArrowDown') event.preventDefault()"
    oninput="localStorage.setItem('placar-${id}-fora', this.value); atualizar();"
  />
        ${getBandeira(j.fora)} ${j.fora}
        <br><small>${infoEstadio}</small>
      </div><hr/>`;
    });

    div.innerHTML += `</div>`;
  });
}



  jogosDetalhados.forEach((bloco, bi)=>{
    bloco.jogos.forEach((j, ji)=>{
      const id = `${bi}-${ji}`;

      const s1 = localStorage.getItem(`placar-${id}-casa`);
      const s2 = localStorage.getItem(`placar-${id}-fora`);

      // Se o campo estiver em branco, ignora (não computa como 0x0 antes do tempo)
      if (s1 === null || s2 === null || s1 === "" || s2 === "") {
        return;
      }

      let g1 = parseInt(s1) || 0;
      let g2 = parseInt(s2) || 0;

      g1 = Math.max(0, g1);
      g2 = Math.max(0, g2);

      tabela[bloco.grupo][j.casa].gp += g1;
      tabela[bloco.grupo][j.casa].gc += g2;
      tabela[bloco.grupo][j.fora].gp += g2;
      tabela[bloco.grupo][j.fora].gc += g1;

      if(g1 > g2){
        tabela[bloco.grupo][j.casa].pts += 3;
        tabela[bloco.grupo][j.casa].v++;
        tabela[bloco.grupo][j.fora].d++;
      } 
      else if(g2 > g1){
        tabela[bloco.grupo][j.fora].pts += 3;
        tabela[bloco.grupo][j.fora].v++;
        tabela[bloco.grupo][j.casa].d++;
      } 
      else {
        tabela[bloco.grupo][j.casa].pts++;
        tabela[bloco.grupo][j.casa].e++;
        tabela[bloco.grupo][j.fora].pts++;
        tabela[bloco.grupo][j.fora].e++;
      }
    });
  });

  renderTabela();
}

function renderTabela(){
  const div = document.getElementById("grupos");
  if (!div) return;
  div.innerHTML = "";
  for(let g in tabela){
    if(grupoSelecionado && g!==grupoSelecionado) continue;
    let times = Object.entries(tabela[g]);
    times.sort((a,b)=> (b[1].pts - a[1].pts) || ((b[1].gp-b[1].gc)-(a[1].gp-a[1].gc)) || (a[1].pos-b[1].pos));

    // Verifica se todos os times do grupo jogaram as 3 partidas da rodada
    const terceiraRodadaCompleta = times.every(([nome, d]) => {
      const totalJogosDoTime = d.v + d.e + d.d;
      return totalJogosDoTime === 3;
    });

    let html = `<div class="card"><h3>${g} - Classificação</h3>
      <table>
        <tr><th>Pos</th><th>Time</th><th>P</th><th>J</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th><th>SG</th></tr>`;
    
    times.forEach(([nome,d],i)=>{
      const jogosTotal = d.v+d.e+d.d;
      
      let classeCSS = "";
      if (terceiraRodadaCompleta) {
        if(i===0 || i===1) classeCSS = "qualificado"; 
        else if(i===2) classeCSS = "terceiro";
      }

      html += `<tr class="${classeCSS}">
        <td>${i+1}</td>
        <td>${getBandeira(nome)} ${nome}</td>
        <td>${d.pts}</td>
        <td>${jogosTotal}</td>
        <td>${d.v}</td>
        <td>${d.e}</td>
        <td>${d.d}</td>
        <td>${d.gp}</td>
        <td>${d.gc}</td>
        <td>${d.gp-d.gc}</td>
      </tr>`;
    });

    html += `</table></div>`;
    div.innerHTML += html;
  }
}

function salvarPlacar(blocoIndex, jogoIndex, lado, valor){

  if(lado === "casa"){
    jogosDetalhados[blocoIndex].jogos[jogoIndex].placarCasa = valor;
  } else {
    jogosDetalhados[blocoIndex].jogos[jogoIndex].placarFora = valor;
  }

  atualizar();
  renderJogos();
}

function atualizar(){
  // Limpa os dados estruturais da tabela
  for(let g in tabela){
    for(let t in tabela[g]){
      tabela[g][t] = {
        pts:0, v:0, e:0, d:0, gp:0, gc:0,
        pos:tabela[g][t].pos
      };
    }
  }

  jogosDetalhados.forEach((bloco, bi)=>{
    bloco.jogos.forEach((j, ji)=>{
      const id = `${bi}-${ji}`;

      const s1 = localStorage.getItem(`placar-${id}-casa`);
      const s2 = localStorage.getItem(`placar-${id}-fora`);

      // Se não houver digitação de placar, ignora para não somar 0x0 prematuro
      if (s1 === null || s2 === null || s1 === "" || s2 === "") {
        return;
      }

      let g1 = parseInt(s1) || 0;
      let g2 = parseInt(s2) || 0;

      g1 = Math.max(0, g1);
      g2 = Math.max(0, g2);

      tabela[bloco.grupo][j.casa].gp += g1;
      tabela[bloco.grupo][j.casa].gc += g2;
      tabela[bloco.grupo][j.fora].gp += g2;
      tabela[bloco.grupo][j.fora].gc += g1;

      if(g1 > g2){
        tabela[bloco.grupo][j.casa].pts += 3;
        tabela[bloco.grupo][j.casa].v++;
        tabela[bloco.grupo][j.fora].d++;
      } 
      else if(g2 > g1){
        tabela[bloco.grupo][j.fora].pts += 3;
        tabela[bloco.grupo][j.fora].v++;
        tabela[bloco.grupo][j.casa].d++;
      } 
      else {
        tabela[bloco.grupo][j.casa].pts++;
        tabela[bloco.grupo][j.casa].e++;
        tabela[bloco.grupo][j.fora].pts++;
        tabela[bloco.grupo][j.fora].e++;
      }
    });
  });

  // Re-renderiza em tela estritamente a janela ativa pós atualização de dados
  if (abaPrincipalAtiva === 'jogos') {
    renderJogos();
  } else if (abaPrincipalAtiva === 'classificacao') {
    renderTabela();
  }
}

function renderTabela(){
  const div = document.getElementById("grupos");
  if (!div) return;
  div.innerHTML = "";
  for(let g in tabela){
    if(grupoSelecionado && g!==grupoSelecionado) continue;
    let times = Object.entries(tabela[g]);
    times.sort((a,b)=> (b[1].pts - a[1].pts) || ((b[1].gp-b[1].gc)-(a[1].gp-a[1].gc)) || (a[1].pos-b[1].pos));

    // Regra da 3ª rodada concluída (Copa do mundo = 3 jogos por time)
    const terceiraRodadaCompleta = times.every(([nome, d]) => {
      const totalJogosDoTime = d.v + d.e + d.d;
      return totalJogosDoTime === 3;
    });

    let html = `<div class="card"><h3>${g} - Classificação</h3>
      <table>
        <tr><th>Pos</th><th>Time</th><th>P</th><th>J</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th><th>SG</th></tr>`;
    
    times.forEach(([nome,d],i)=>{
      const jogosTotal = d.v+d.e+d.d;
      
      let classeCSS = "";
      if (terceiraRodadaCompleta) {
        if(i===0 || i===1) classeCSS = "qualificado"; 
        else if(i===2) classeCSS = "terceiro";
      }

      html += `<tr class="${classeCSS}">
        <td>${i+1}</td>
        <td>${getBandeira(nome)} ${nome}</td>
        <td>${d.pts}</td>
        <td>${jogosTotal}</td>
        <td>${d.v}</td>
        <td>${d.e}</td>
        <td>${d.d}</td>
        <td>${d.gp}</td>
        <td>${d.gc}</td>
        <td>${d.gp-d.gc}</td>
      </tr>`;
    });

    html += `</table></div>`;
    div.innerHTML += html;
  }
}

function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.style.display = 'none';
  });

  const aba = document.getElementById(tabId);
  if (aba) {
    aba.style.display = 'block';
  }
}

function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.style.display = 'none';
  });

  const aba = document.getElementById(tabId);
  if (aba) {
    aba.style.display = 'block';
  }
}

window.onload = function () {

  init();

  const hash = window.location.hash.replace('#', '');

  if (hash) {
    showTab(hash);
  } else {
    showTab('classificacao');
  }

  atualizar();
};

