const readline = require("readline");

// Criando a interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para capturar o nome e o salário do funcionário
function mostrarDadosFuncionario() {
  rl.question("Digite o nome do funcionário: ", (nome) => {
    rl.question("Digite o salário do funcionário: ", (salario) => {
      // Exibe a mensagem no console
      console.log(
        `O funcionário ${nome} recebe R$${parseFloat(salario).toFixed(
          2
        )} por mês.`
      );

      // Fecha a interface após a captura
      rl.close();
    });
  });
}

// Chama a função para iniciar o processo
mostrarDadosFuncionario();
