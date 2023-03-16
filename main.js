const form = document.getElementById("add-number");

let linhas = ""; // a variavel linhas esta no escopo global pq se estivesse dentro do evento ela tambem resetaria entao nao iria adicionar mais uma linha a lista

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nomeContato = document.getElementById("contact-name");
  const numeroContato = document.getElementById("contact-number");

  //aqui foi criado uma variavel para criar uma linha dentro do html.
  let linha = `<tr>`;
  linha += `<td >${nomeContato.value}</td>`;
  linha += `<td id="border">${numeroContato.value}</td>`;
  linha += `</tr>`;

  linhas += linha;

  const corpoTabela = document.querySelector("tbody"); // essa const serve para sinalizar onde conteudo vai ser adicionado, no caso dentro do corpo da tabela
  corpoTabela.innerHTML = linhas; // essa linha fara com que crie todo o conteudo da variavel linha no HTML

  nomeContato.value = "";
  numeroContato.value = "";
});
