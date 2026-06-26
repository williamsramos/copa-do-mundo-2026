/* ================= LÓGICA DE CLASSIFICAÇÃO DOS GRUPOS ================= */
function renderTabela(){
  const div = document.getElementById("grupos");
  if(!div) return;
  div.innerHTML = "";

  for(let g in tabela){
    let times = Object.entries(tabela[g]);
    
    // === ORDENAÇÃO CORRIGIDA: Pontos -> Saldo de Gols -> Gols Pró (GP) -> Posição Inicial ===
    times.sort((a, b) => {
      if (b[1].pts !== a[1].pts) {
        return b[1].pts - a[1].pts; // 1º Critério: Pontos
      }
      
      const saldoA = a[1].gp - a[1].gc;
      const saldoB = b[1].gp - b[1].gc;
      if (saldoB !== saldoA) {
        return saldoB - saldoA; // 2º Critério: Saldo de Gols
      }
      
      if (b[1].gp !== a[1].gp) {
        return b[1].gp - a[1].gp; // 3º Critério: Gols Pró / Marcados (O que faltava!)
      }
      
      return a[1].pos - b[1].pos; // 4º Critério: Posição original de sorteio
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

 /* ================= LÓGICA DE CLASSIFICAÇÃO DOS GRUPOS ================= */
function renderTabela(){
  const div = document.getElementById("grupos");
  if(!div) return;
  div.innerHTML = "";

  for(let g in tabela){
    let times = Object.entries(tabela[g]);
    
    // === ORDENAÇÃO CORRIGIDA: Pontos -> Saldo de Gols -> Gols Pró (GP) -> Posição Inicial ===
    times.sort((a, b) => {
      if (b[1].pts !== a[1].pts) {
        return b[1].pts - a[1].pts; // 1º Critério: Pontos
      }
      
      const saldoA = a[1].gp - a[1].gc;
      const saldoB = b[1].gp - b[1].gc;
      if (saldoB !== saldoA) {
        return saldoB - saldoA; // 2º Critério: Saldo de Gols
      }
      
      if (b[1].gp !== a[1].gp) {
        return b[1].gp - a[1].gp; // 3º Critério: Gols Pró / Marcados (O que faltava!)
      }
      
      return a[1].pos - b[1].pos; // 4º Critério: Posição original de sorteio
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


    html += `</table></div>`;
    div.innerHTML += html;
  }
}