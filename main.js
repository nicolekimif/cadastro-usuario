// Função para validar o login e redirecionar o usuário
function acessar() {
    // Captura os valores digitados nos campos de input do HTML
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    // Verifica se algum dos campos está vazio (o "!" significa "não tem valor")
    if (!loginEmail || !loginSenha) {
        alert("Favor, preencha todos os campos");
    } else {
        // Se ambos estiverem preenchidos, redireciona para a página de cadastro
        window.location.href = 'cadastro.html';
    }
}

// Cria um Array vazio para servir como banco de dados temporário dos nomes
var dadosLista = [];

// Função responsável por capturar o nome do usuário e salvar na lista
function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    // Verifica se o campo nome não está vazio
    if(nomeUser){
        dadosLista.push(nomeUser); // Adiciona o nome ao final do Array
        console.log(dadosLista);   // Exibe a lista no console para conferência
        criaLista();               // Chama a função para atualizar a visualização na tabela
        document.getElementById('nomeUser').value = ""; // Limpa o campo de texto
    } else {
        alert("Usuário, favor preencher o compo nome");
    }
}

// Função que desenha e atualiza a tabela HTML com os dados do Array
function criaLista(){
    // Reinicia o conteúdo da tabela apenas com o cabeçalho
    let tabela = document.getElementById('tabela').innerHTML = " <tr><th>Nome Usuário</th><th>Ações</th> </tr>";

    // Percorre o Array 'dadosLista' para criar uma linha na tabela para cada item
    for(let i = 0; i <= (dadosLista.length - 1); i++){

        // Acumula na variável 'tabela' o HTML das linhas com os nomes e botões de ação
        // 'this.parentNode.parentNode.rowIndex' identifica em qual linha o botão está
        tabela += "<tr><td>" + dadosLista[i] + "</td><td> <button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button> <button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button> </td></tr>";
        
        // Atualiza o elemento HTML da tabela com as novas linhas
        document.getElementById('tabela').innerHTML = tabela;
    }
}

// Função para editar um nome já cadastrado
function editar(i){
    // Pega o nome na lista (usando o índice da linha - 1) e joga de volta para o campo de input
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    
    // Remove o item antigo da lista para que ele possa ser "substituído" ao salvar novamente
    dadosLista.splice((i - 1), 1);
}

// Função para excluir um registro
function excluir(i){
    // Remove o item do Array 'dadosLista' com base na posição da linha
    dadosLista.splice((i - 1), 1);
    
    // Remove a linha fisicamente da tabela HTML
    document.getElementById('tabela').deleteRow(i);
}