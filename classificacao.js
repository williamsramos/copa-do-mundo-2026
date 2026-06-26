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

 // Dentro da sua função renderTabela() no classificacao.js:
times.forEach(([nome, d], i) => {
  const posicao = i + 1;
  let statusTexto = "";
  let statusClasse = "";

  // Define o texto e a classe CSS com base na posição exata
  if (posicao <= 2) {
    statusTexto = "16 avos de final";
    statusClasse = "status-classificado";   // Verde para 1º e 2º
  } else if (posicao === 3) {
    statusTexto = "16 avos de final";
    statusClasse = "status-terceiro-azul";  // Azul claro para o 3º
  } else if (posicao === 4) {
    statusTexto = "Eliminado";
    statusClasse = "status-eliminado";      // Vermelho para o 4º
  }

  const jogosTotal = d.v + d.e + d.d;

  html += `
    <tr class="${statusClasse}">
      <td>${posicao}</td>
      <td style="text-align:left; padding-left:10px;">${getBandeira(nome)} ${nome}</td>
      <td>${d.pts}</td>
      <td>${jogosTotal}</td>
      <td>${d.v}</td>
      <td>${d.e}</td>
      <td>${d.d}</td>
      <td>${d.gp}</td>
      <td>${d.gc}</td>
      <td>${d.gp - d.gc}</td>
      <td style="font-size: 11px; font-weight: bold; text-transform: uppercase;">
        ${statusTexto}
      </td>
    </tr>
  `;
});

    html += `</table></div>`;
    div.innerHTML += html;
  }
}