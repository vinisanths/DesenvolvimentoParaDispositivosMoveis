const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ehPar(numero) {
  return numero % 2 === 0;
}

rl.question("Digite um número: ", (input) => {
  const numeroUsuario = parseInt(input);
  if (ehPar(numeroUsuario)) {
    console.log("O número é par.");
  } else {
    console.log("O número é ímpar.");
  }
  rl.close();
});
