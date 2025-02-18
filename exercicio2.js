const readline = require("readline");

// Criando a interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mostrarBoasVindas() {
  // Usando readline para capturar o nome do usuário
  rl.question("Digite seu nome: ", (nome) => {
    // Exibe a mensagem no console
    console.log(`Olá, ${nome}`);

    // Fecha a interface após a captura
    rl.close();
  });
}

// Chama a função para iniciar o processo
mostrarBoasVindas();
