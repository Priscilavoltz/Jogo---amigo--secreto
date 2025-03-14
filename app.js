// Array para armazenar nomes de amigos
let amigos = [];

//  adicionar um amigo
function adicionarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nomesAmigos = inputAmigo.value.trim();
  
  // Validar que o campo não está vazio
  if (nomesAmigos === "") {
    alert("Por favor, insira um nome.");
    return;
  }
  
  // Validar se não há duplicidade entre os nomes
  if (amigos.includes(nomesAmigos)) {
    alert(`${nomesAmigos} já está na lista.`);
    return;
  }
  
  // Adicionar o nome ao array de amigos
  amigos.push(nomesAmigos);
  
  // Limpar o campo de entrada
  inputAmigo.value = "";
  
  // Atualizar a lista de amigos
  atualizarLista();
}

// Função para atualizar a lista de amigos
function atualizarLista() {
  const listaAmigos = document.getElementById('listaAmigos');
  
  // Limpar o conteúdo atual da lista
  listaAmigos.innerHTML = "";
  
  // Percorrer a matriz com um loop for
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    
    // Criar botão de remoção
    const btnRemover = document.createElement('button');
    btnRemover.textContent = "❌";
    btnRemover.classList.add("remove-btn");
    btnRemover.onclick = function() {
      removerAmigo(i);
    };
    
    li.appendChild(btnRemover);
    listaAmigos.appendChild(li);
  }
}

// Função para remover um amigo da lista
function removerAmigo(index) {
  amigos.splice(index, 1); // Remove pelo índice
  atualizarLista(); // Atualiza a exibição
}

// Função para sortear um amigo
function sortearAmigo() {
  const resultado = document.getElementById('resultado');
  
  // Validar se há amigos na lista
  if (amigos.length === 0) {
    alert("Não há amigos suficientes para sortear. Adicione ao menos um.");
    return;
  }
  
  // Gerar um índice aleatório
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
  // Obter o nome sorteado
  const amigoSorteado = amigos[indiceAleatorio];
  
  // Exibir o resultado na interface
  resultado.innerHTML = `🎉 Amigo sorteado: <strong>${amigoSorteado}</strong> 🎉`;
}