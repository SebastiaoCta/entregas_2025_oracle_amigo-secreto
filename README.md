# entregas_2025_oracle_amigo-secreto

"const" nomeAmigoInput = document.getElementById('nome-amigo'); (A principal função do "const" é criar uma referência somente leitura para um valor. Isso significa que, uma vez que uma variável é declarada com const, seu identificador não pode ser associado a um novo valor).

function adicionarAmigo() {
    const nome = nomeAmigoInput.value.trim() (A função dessa linha de código é obter o texto digitado por um usuário em um campo de input, limpar os espaços em branco do início e do fim desse texto, e armazená-lo em uma variável constante chamada nome).
       
function atualizarLista() {
    // Limpa a lista atual para não duplicar nomes  (As duas barras // indicam que o texto a seguir é um comentário).
    
    listaAmigosDiv.innerHTML = "";  (Este é o nome de uma variável. Ela representa um elemento HTML na página, provavelmente uma <div> (uma divisão ou seção) que contém uma lista de amigos).

 function sortearAmigo() {
    // Verifica se há pelo menos 2 amigos para o sorteio fazer sentido - (Este é um comentário no código. Ele não é executado, apenas serve para explicar a intenção do programador. Aqui, ele nos diz que o bloco de código a seguir vai validar a quantidade de amigos na lista).
    
    if (amigos.length < 2) { - if: (Esta é uma declaração condicional. Ela executa o bloco de código dentro das chaves {...} somente se a condição dentro dos parênteses (...) for verdadeira).
        alert("Adicione pelo menos dois amigos para realizar o sorteio!"); alert(): (É uma função nativa do JavaScript que exibe uma caixa de diálogo de alerta no navegador do usuário com a mensagem fornecida.)
       
        return; (A palavra-chave return, quando usada sozinha dentro de uma função, interrompe a execução da função imediatamente.)
    }

   // 3. Sorteio aleatório: gera um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length); ( Esta linha de código tem uma única e importante função: escolher um número inteiro aleatório que corresponda a uma posição (um índice) válida dentro da lista amigos).

     // Seleciona o amigo no índice sorteado
    const amigoSecreto = amigos[indiceSorteado]; ( A função desta linha é buscar e armazenar o nome do amigo que foi efetivamente sorteado. Ela usa o índice aleatório, gerado na linha anterior, para "pescar" o nome correspondente na lista de amigos.
        
    
// Exibe o resultado na tela
    resultadoP.textContent = amigoSecreto; (A função desta linha é atualizar o conteúdo de um elemento na página HTML para exibir o nome do amigo que foi sorteado. Em outras palavras, é o código que torna o resultado visível para o usuário final.
}

// Adicionando os eventos aos botões
botaoAdicionar.addEventListener('click', adicionarAmigo);
botaoSortear.addEventListener('click', sortearAmigo); ( A função principal deste bloco de código é registrar "ouvintes de eventos" (event listeners) nos botões da página. Em termos simples, ele diz ao navegador: "Ei, preste atenção nestes botões. Se um usuário clicar neles, execute a função correspondente".)

