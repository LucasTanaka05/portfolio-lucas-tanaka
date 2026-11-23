// Função que altera o conteúdo da página (manipulação do DOM).
function mostrarMensagem() {
  const mensagem = document.querySelector("#mensagem");
  mensagem.textContent = "Obrigado por visitar meu portfólio!";
}

const botao = document.querySelector("#botao-mensagem");
if (botao) {
  botao.addEventListener("click", mostrarMensagem);
}
