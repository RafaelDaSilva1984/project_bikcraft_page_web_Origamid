const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='font-2-1' style='grid-column:1/-1; padding:1rem; border-radius:0.25rem; background:#f7f7f7'><span style='color:#317a00'>Mensagem enviada</span> com sucesso, em breve entraremos em contato. Geralmente respondemos em 24h.</p>";
  } else {
    formulario.innerHTML =
      "<p class='font-2-1' style='grid-column:1/-1; padding:5rem; border-radius:0.25rem; background:#f7f7f7'><span style='color:#e00000'>Erro no envio</span>, você pode enviar direto para o nosso e-mail em: contato@21rfssoftwares.com.br</p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true; // após primeiro click desabilita o button
  botao.innerText = "Enviando..."; // altera texto do button

  const data = new FormData(formulario); // seleciona dados do form como chave e valor

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
