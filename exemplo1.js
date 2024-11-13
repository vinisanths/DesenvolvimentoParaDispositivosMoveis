const readline = require('readline');

// Cria a interface para leitura de dados do console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para obter os números do usuário
function obterNumeros() {
    rl.question("Informe o primeiro número: ", (num1) => {
        rl.question("Informe o segundo número: ", (num2) => {
            rl.question("Informe o terceiro número: ", (num3) => {
                // Converte as entradas para números
                const numero1 = parseFloat(num1);
                const numero2 = parseFloat(num2);
                const numero3 = parseFloat(num3);

                // Verifica se os inputs são válidos
                if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
                    console.log("Por favor, insira apenas números válidos.");
                    rl.close();
                    return;
                }

                // Determina o maior e o menor número
                const maior = Math.max(numero1, numero2, numero3);
                const menor = Math.min(numero1, numero2, numero3);

                // Exibe o resultado
                console.log(`O maior número é: ${maior}`);
                console.log(`O menor número é: ${menor}`);

                // Fecha a interface
                rl.close();
            });
        });
    });
}

// Chama a função para obter os números
obterNumeros();