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


//Dados primitivos
let nome1 = 'Kayo';
let nome2 = nome1;
nome1 = 'Forest';

console.log(nome1, nome2);

let obj1 = {
    nome: 'Kayo'
};
let obj2 = obj1;
obj2.nome = 'Forest';

console.log(obj1, obj2);


//Função de primeira classe
let arrAnoCarros = [1965, 1992,1997, 1975, 1981];

//Função Callback
function calcularTempoCarro(anoCarro) {
    let data = new Date();
    return data.getFullYear() - anoCarro;
}

function anoDosCarros(arr, fun) {
    let arrTempoCarros = [];
    for (let i = 0; i < arr.length; i++) {
        arrTempoCarros.push(fun(arr[i]));
}
return arrTempoCarros
}

//Passando no segundo parâmetro uma função
let arrCarros = anoDosCarros(arrAnoCarros, calcularTempoCarro);

console.log(arrCarros);

