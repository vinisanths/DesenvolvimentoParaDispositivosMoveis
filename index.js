// Classe Carro
class Carro {
  constructor(modelo, marca, ano, placa, cor) {
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
    this.placa = placa;
    this.cor = cor;
    this.velocidade = 0;
    this.status = false; // Parado ou em movimento
  }

 // Método para ligar o carro
  ligar() {
    this.status = true;
  }
  // Método para desligar o carro
  desligar() {
    this.status = false;
  }

  // Método para aumentar a velocidade
  acelerar(quantidade) {
    if (this.status == false) {
      console.log('BIP! o carro está parado')
    } else {
      this.velocidade += quantidade;
      console.log(`acelerou o ${this.modelo} para ${this.velocidade} km/h`)
    }
  }

  // Método para reduzir a velocidade
  frear(quantidade) {
    if (this.status == false) {
      console.log('BIP! o carro está parado')
    } else {
      this.velocidade -= quantidade;
      console.log(`freou o ${this.modelo} para ${this.velocidade} km/h`)
    }
  }
}

class Semaforo{
  constructor(endereco, vel_MAX, codigo) {
    this.endereco = endereco;
    this.vel_MAX = vel_MAX;
    this.codigo = codigo;
  }
    verificarVEL(Carro){
      if (Carro.velocidade > this.vel_MAX+(this.vel_MAX * 0.10) || Carro.velocidade < (this.vel_MAX / 2)){
        console.log('Pegou multa')
      } else{
        console.log('Não Pegou Multa')
      }
    }
}

const semaforo01 = new Semaforo('Rua das tranqueiras', 50, 'SEMA001')

//console.log(semaforo01.endereco)
// Criando 5 carros
let carros = [
  new Carro("HB20", "Marca A", 2020, "AAA-1234", "Vermelho"),
  new Carro("Palio", "Marca B", 2019, "BBB-5678", "Preto"),
  new Carro("Gol", "Marca B", 2021, "CCC-9012", "Branco"),
  new Carro("Clio", "Marca C", 2023, "DDD-3456", "Vermelho"),
  new Carro("Onix", "Marca B", 2022, "EEE-7890", "Verde"),
  new Carro("Corsa", "Marca C", 2017, "FFF-2345", "Amarelo"),
  new Carro("Fusca", "Marca A", 2002, "GGG-6789", "Cinza"),
  new Carro("Prisma", "Marca C", 2015, "HHH-0123", "Laranja"),
  new Carro("Cruze", "Marca B", 2022, "III-4567", "Vermelho"),
  new Carro("Camaro", "Marca A", 2023, "JJJ-8901", "Preto")
];

// Exemplo de uso dos métodos
//carros[0].ligar(); // liga o carro
//carros[0].acelerar(56); // Aumenta a velocidade do carro 0 em 50 km/h
//carros[0].frear(20);  // Reduz a velocidade do carro 0 em 20 km/h
//carros[0].desligar(); // desliga o carro
//semaforo01.verificarVEL(carros[0]);


console.log("========= Não pagam mais imposto ==========")
for (var i = 0; i < carros.length; i++){
  if(2024 - carros[i].ano >= 20){
    console.log(carros[i].modelo)
  }
}
console.log("============ Fabricados entre 2021 e 2023 ============")
for (var j = 0; j < carros.length; j++){
  if(carros[j].ano >= 2021 && carros[j].ano <= 2023){
    console.log(carros[j].modelo + " " + carros[j].ano)
  } 
}

console.log("======== Carros da cor vermelha ========")
for (var k = 0; k < carros.length; k++){
  if(carros[k].cor == "Vermelho"){
    console.log(carros[k].modelo + " " + carros[k].placa)
  }
}

console.log("===========Carros da Marca A ============")
for (var l = 0; l < carros.length; l++){
  if(carros[l].marca == "Marca A"){
    console.log("CARROS DA MARCA : " + carros[l].marca + " "+ carros[l].modelo + " " + carros[l].placa)
  }
}
console.log("===========Carros da Marca B ============")
for(var m = 0; m < carros.length; m++){
  if(carros[m].marca == "Marca B"){
    console.log("CARROS DA MARCA : " + carros[m].marca + " " + carros[m].modelo + " " + carros[m].placa)
  }
}
console.log("===========Carros da Marca C ============")
for(var n = 0; n < carros.length; n++){
  if(carros[n].marca == "Marca C"){
    console.log("CARROS DA MARCA : " + carros[n].marca + " " + carros[n].modelo + " " + carros[n].placa)
  }
}
 