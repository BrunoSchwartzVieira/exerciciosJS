const readline = require("readline");

// Criando a interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para capturar dois números e calcular a soma
function somarNumeros() {
  rl.question("Digite o primeiro número: ", (numero1) => {
    rl.question("Digite o segundo número: ", (numero2) => {
      // Convertendo os valores para inteiros e realizando a soma
      const soma = parseInt(numero1) + parseInt(numero2);

      // Exibe o resultado no console
      console.log(`A soma entre ${numero1} e ${numero2} é: ${soma}`);

      // Fecha a interface após a captura
      rl.close();
    });
  });
}

// Chama a função para iniciar o processo
somarNumeros();
