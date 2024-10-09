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

console.log(semaforo01.endereco)
// Criando 5 carros
let carros = [
  new Carro("HB20", "Marca A", 2020, "AAA-1234", "Vermelho"),
  new Carro("Palio", "Marca B", 2019, "BBB-5678", "Preto"),
  new Carro("Gol", "Marca C", 2021, "CCC-9012", "Branco"),
  new Carro("Clio", "Marca D", 2018, "DDD-3456", "Azul"),
  new Carro("Onix", "Marca E", 2022, "EEE-7890", "Verde"),
];

// Exemplo de uso dos métodos
carros[0].ligar(); // liga o carro
carros[0].acelerar(56); // Aumenta a velocidade do carro 0 em 50 km/h
//carros[0].frear(20);  // Reduz a velocidade do carro 0 em 20 km/h
//carros[0].desligar(); // desliga o carro
semaforo01.verificarVEL(carros[0]);

