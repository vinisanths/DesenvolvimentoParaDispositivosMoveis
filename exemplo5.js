function calcularMedia(array) {
    const soma = array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    return soma / array.length;
  }
  
  // Conjuntos de números (arrays)
  const numeros1 = [10, 20, 30, 40];
  const numeros2 = [15, 25, 35, 45];
  const numeros3 = [12, 22, 32, 42];
  
  // Calculando a média de cada conjunto
  const media1 = calcularMedia(numeros1);
  const media2 = calcularMedia(numeros2);
  const media3 = calcularMedia(numeros3);
  
  console.log(`A média do primeiro conjunto é: ${media1}`);
  console.log(`A média do segundo conjunto é: ${media2}`);
  console.log(`A média do terceiro conjunto é: ${media3}`);
  