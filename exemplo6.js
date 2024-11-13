const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularFatorial(n) {
  if (n < 0) {
    return "Fatorial não é definido para números negativos.";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    let fatorial = 1;
    for (let i = 1; i <= n; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
}

rl.question("Digite um número para calcular o fatorial: ", (input) => {
  const numeroUsuario = parseInt(input);

  if (isNaN(numeroUsuario)) {
    console.log("Por favor, digite um número válido.");
  } else {
    const resultado = calcularFatorial(numeroUsuario);
    console.log(`O fatorial de ${numeroUsuario} é: ${resultado}`);
  }

  rl.close();
});
