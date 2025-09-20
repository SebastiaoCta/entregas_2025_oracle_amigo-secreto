//Este codigo foi desenvolvido com ajuda do Gemini.
// Array para armazenar a lista de amigos
// Selecionando os elementos do HTML
const nomeAmigoInput = document.getElementById('nome-amigo');
const botaoAdicionar = document.getElementById('botao-adicionar');
const listaAmigosDiv = document.getElementById('lista-amigos');
const botaoSortear = document.getElementById('botao-sortear');
const resultadoP = document.getElementById('resultado');

/**
 * Função para adicionar um novo amigo à lista.
 */
function adicionarAmigo() {
    const nome = nomeAmigoInput.value.trim(); // Pega o valor e remove espaços em branco

    // 1. Validar entrada: verifica se o campo de texto não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return; // Para a execução da função se o nome for inválido
    }
    
    // Adiciona o nome ao array de amigos
    amigos.push(nome);
    
    // Limpa o campo de texto após adicionar
    nomeAmigoInput.value = "";
    
    // Atualiza a visualização da lista na tela
    atualizarLista();
    
    // Coloca o foco de volta no campo de input
    nomeAmigoInput.focus();
}

/**
 * Função para atualizar a lista de amigos exibida na página.
 */
function atualizarLista() {
    // Limpa a lista atual para não duplicar nomes
    listaAmigosDiv.innerHTML = "";
    
    // 2. Visualizar a lista: cria um elemento <p> para cada amigo e o adiciona na div
    for (let i = 0; i < amigos.length; i++) {
        const paragrafoAmigo = document.createElement('p');
        paragrafoAmigo.textContent = amigos[i];
        listaAmigosDiv.appendChild(paragrafoAmigo);
    }
}

/**
 * Função para realizar o sorteio do amigo secreto.
 */
function sortearAmigo() {
    // Verifica se há pelo menos 2 amigos para o sorteio fazer sentido
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio!");
        return;
    }

    // 3. Sorteio aleatório: gera um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    
    // Seleciona o amigo no índice sorteado
    const amigoSecreto = amigos[indiceSorteado];
    
    // Exibe o resultado na tela
    resultadoP.textContent = amigoSecreto;
}

// Adicionando os eventos aos botões
botaoAdicionar.addEventListener('click', adicionarAmigo);
botaoSortear.addEventListener('click', sortearAmigo);

