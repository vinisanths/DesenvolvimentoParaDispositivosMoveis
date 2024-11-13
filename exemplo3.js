const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ehPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

function askNumber(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(parseFloat(answer));
    });
  });
}

async function main() {
  const num1 = await askNumber("Digite o primeiro número: ");
  const num2 = await askNumber("Digite o segundo número: ");
  const num3 = await askNumber("Digite o terceiro número: ");

  // Calcula a média
  const media = (num1 + num2 + num3) / 3;

  // Verifica se a média é um número primo
  if (ehPrimo(Math.floor(media))) {
    console.log(`A média é ${media.toFixed(2)} e é um número primo.`);
  } else {
    console.log(`A média é ${media.toFixed(2)} e não é um número primo.`);
  }

  rl.close();
}

// Executa a função principal
main();
