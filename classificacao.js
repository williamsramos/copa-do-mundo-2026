/* ================= LÓGICA DE CLASSIFICAÇÃO DOS GRUPOS ================= */
function renderTabela(){
  const div = document.getElementById("grupos");
  if(!div) return;
  div.innerHTML = "";

  for(let g in tabela){
    let times = Object.entries(tabela[g]);
    
    // === ORDENAÇÃO CORRIGIDA ===
   times.sort((a, b) => {
  if (b[1].pts !== a[1].pts) return b[1].pts - a[1].pts; // 1º Pontos
  
  const saldoA = a[1].gp - a[1].gc;
  const saldoB = b[1].gp - b[1].gc;
  if (saldoB !== saldoA) return saldoB - saldoA; // 2º Saldo de Gols
  
  if (b[1].gp !== a[1].gp) return b[1].gp - a[1].gp; // 3º Gols Pró

  // === NOVO CRITÉRIO: Fair Play (Maior pontuação vence. Ex: -3 é maior que -5) ===
  const fpA = a[1].fp || 0;
  const fpB = b[1].fp || 0;
  if (fpB !== fpA) return fpB - fpA; 
  
  return a[1].pos - b[1].pos; // 4º Posição original
});

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
        else if(i === 3) classeCSS = "quarto";
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

  renderMelhoresTerceiros();

  // Executa com segurança após o carregamento completo da página
  setTimeout(() => {
    if (typeof injetar8TerceirosNoMataMata === "function") {
      injetar8TerceirosNoMataMata();
    }
  }, 100);
}

/* ================= LÓGICA DOS MELHORES TERCEIROS COLOCADOS ================= */
function renderMelhoresTerceiros() {
  const div = document.getElementById("melhores-terceiros");
  if (!div) return; 
  div.innerHTML = "";

  let listaTerceiros = [];

  for (let g in tabela) {
    let timesGrupo = Object.entries(tabela[g]);
    timesGrupo.sort((a, b) => {
      if (b[1].pts !== a[1].pts) return b[1].pts - a[1].pts;
      const saldoA = a[1].gp - a[1].gc;
      const saldoB = b[1].gp - b[1].gc;
      if (saldoB !== saldoA) return saldoB - saldoA;
      if (b[1].gp !== a[1].gp) return b[1].gp - a[1].gp;
      return a[1].pos - b[1].pos;
    });

    if (timesGrupo[2]) {
      const [nome, d] = timesGrupo[2];
      listaTerceiros.push({
        nome: nome,
        grupo: g.replace("Grupo ", ""), 
        pts: d.pts,
        v: d.v,
        gp: d.gp,
        gc: d.gc,
        sg: d.gp - d.gc,
        jogos: d.v + d.e + d.d
      });
    }
  }

  // INJEÇÃO MANUAL DE FAIR PLAY: Define os pesos com base no site da FIFA
  if (listaTerceiros.find(t => t.nome === "Gana")) listaTerceiros.find(t => t.nome === "Gana").fp = -3;
  if (listaTerceiros.find(t => t.nome === "Equador")) listaTerceiros.find(t => t.nome === "Equador").fp = -5;

  listaTerceiros.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts; 
    if (b.sg !== a.sg) return b.sg - a.sg;     
    if (b.gp !== a.gp) return b.gp - a.gp;     
    
    // Critério Fair Play para os terceiros
    const fpA = a.fp || 0;
    const fpB = b.fp || 0;
    if (fpB !== fpA) return fpB - fpA;

    return 0;
  });

  let html = `
    <div class="card card-terceiros" style="margin-top: 20px;">
      <h3>🏆 Classificação das Melhores Terceiras Colocadas</h3>
      <table>
        <tr><th>Pos</th><th style="text-align:left; padding-left:10px;">Time</th><th>Gr.</th><th>J</th><th>SG</th><th>PTS</th></tr>
  `;

  listaTerceiros.forEach((time, i) => {
    const posicao = i + 1;
    let classeCSS = "";

    if (posicao <= 8) {
      if (time.jogos === 3) {
        if (time.pts >= 4 || (time.pts === 3 && time.sg >= 1)) {
          classeCSS = "terceiro-garantido";
        } else {
          classeCSS = "terceiro-g8"; 
        }
      } else {
        classeCSS = "terceiro-g8"; 
      }
    } else {
      classeCSS = "terceiro-fora"; 
    }

    html += `
      <tr class="${classeCSS}">
        <td class="col-posicao"><span>${posicao}</span></td>
        <td style="text-align:left; padding-left:10px; font-weight: bold;">${getBandeira(time.nome)} ${time.nome}</td>
        <td style="color: #888; font-weight: bold;">${time.grupo}</td>
        <td>${time.jogos}</td>
        <td style="${time.sg >= 0 ? 'color: #28a745;' : 'color: #dc3545;'} font-weight: bold;">
          ${time.sg > 0 ? '+' + time.sg : time.sg}
        </td>
        <td style="font-weight: bold;">${time.pts}</td>
      </tr>
    `;
  });

  html += `</table></div>`;
  div.innerHTML = html;
}

/* ================= MOTOR: RETORNA OS 8 CLASSIFICADOS PARA O MATA-MATA ================= */
function get8MelhoresTerceiros() {
  let tudoTerminado = true;
  for (let g in tabela) {
    for (let nome in tabela[g]) {
      let d = tabela[g][nome];
      if ((d.v + d.e + d.d) < 3) {
        tudoTerminado = false;
        break;
      }
    }
    if (!tudoTerminado) break;
  }

  if (!tudoTerminado) return [];

  let listaTerceiros = [];
  for (let g in tabela) {
    let timesGrupo = Object.entries(tabela[g]);
    timesGrupo.sort((a, b) => {
      if (b[1].pts !== a[1].pts) return b[1].pts - a[1].pts;
      const saldoA = a[1].gp - a[1].gc;
      const saldoB = b[1].gp - b[1].gc;
      if (saldoB !== saldoA) return saldoB - saldoA;
      if (b[1].gp !== a[1].gp) return b[1].gp - a[1].gp;
      return a[1].pos - b[1].pos;
    });

    if (timesGrupo[2]) {
      const [nome, d] = timesGrupo[2];
      listaTerceiros.push({ nome: nome, pts: d.pts, sg: d.gp - d.gc, gp: d.gp });
    }
  }

  // INJEÇÃO MANUAL DE FAIR PLAY: Também para o motor do mata-mata puxar ordenado
  if (listaTerceiros.find(t => t.nome === "Gana")) listaTerceiros.find(t => t.nome === "Gana").fp = -3;
  if (listaTerceiros.find(t => t.nome === "Equador")) listaTerceiros.find(t => t.nome === "Equador").fp = -5;

  listaTerceiros.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts; 
    if (b.sg !== a.sg) return b.sg - a.sg;     
    if (b.gp !== a.gp) return b.gp - a.gp;     
    
    // Critério Fair Play de desempate
    const fpA = a.fp || 0;
    const fpB = b.fp || 0;
    if (fpB !== fpA) return fpB - fpA;

    return 0;
  });

  return listaTerceiros.slice(0, 8);
}