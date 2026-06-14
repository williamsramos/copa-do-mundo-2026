/* ================= LÓGICA ESPECÍFICA DO MATA-MATA ================= */
function salvarPenais(blocoIndex, jogoIndex, lado, valor) {
  if(lado === "casa"){
    jogosDetalhados[blocoIndex].jogos[jogoIndex].penaisCasa = valor;
  } else {
    jogosDetalhados[blocoIndex].jogos[jogoIndex].penaisFora = valor;
  }
  atualizar(true);
}