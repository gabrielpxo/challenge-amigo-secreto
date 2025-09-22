let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (!nome) {
    alert("⚠️ Por favor, digite um nome válido!");
    return;
  }

  amigos.push(nome);
  atualizarLista();
  input.value = "";
  input.focus();
}

// Atualizar a lista de amigos na tela
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${amigo}`;
    lista.appendChild(li);
  });
}

// Sortear amigo da lista
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("⚠️ Adicione pelo menos um amigo antes de sortear!");
    return;
  }

  const x = Math.floor(Math.random() * amigos.length);
  const sorteado = amigos[x];
  const resultado = document.getElementById("resultado");

  resultado.textContent = `🎉 O sorteado foi: ${sorteado}!`;
  resultado.style.transform = "scale(1.2)";
  setTimeout(() => (resultado.style.transform = "scale(1)"), 300);
}
