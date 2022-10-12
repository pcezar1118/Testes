function Carro(nome, cor, marca, ano) {
    this.nome = nome;
    this.cor = cor;
    this.marca = marca;
    this.ano = ano;
};

Carro.prototype.velocidade = 0;
Carro.prototype.acelerar = function() {
    this.velocidade += 10;
};
Carro.prototype.parar = function() {
    this.velocidade = 0;
};


let brasilia = new Carro('Brasília', 'Azul', 'VW', 1975);

console.log(brasilia);

//Como não é um construtor o nome do objeto
//Inicia em minúsculo
let carroProto = {
    velocidade: 0,
    acelerar: function() {
        this.velocidade += 5;
    },
    parar: function() {
        this.velocidade = 0;
    }
};

//Utilizando uma função do prototype do Object
//Para criar um objeto
let fusca = Object.create(carroProto, {
    nome: {value: 'Fusca'},
    cor: {value:'Azul'},
    marca: {value:'VW'},
    ano: {value: 1975}
});

console.log(fusca);
