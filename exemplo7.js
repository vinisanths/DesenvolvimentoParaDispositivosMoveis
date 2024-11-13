const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function somarParametros(param1, param2) {
  if (param1 === '' || param2 === '' || isNaN(param1) || isNaN(param2)) {
    return 0; 
  }
  
  return parseFloat(param1) + parseFloat(param2);
}

rl.question("Digite o primeiro número: ", (input1) => {
  rl.question("Digite o segundo número: ", (input2) => {
    const resultado = somarParametros(input1, input2);
    console.log(`A soma é: ${resultado}`);
    rl.close();
  });
});
