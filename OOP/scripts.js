// //Prototype
// const text = "asd"
// console.log(Object.getPrototypeOf(text))

// const bool = true
// console.log(Object.getPrototypeOf(bool))

// const arr = []

// console.log(arr.length)
// console.log(Object.getPrototypeOf(arr))

//Mais sobre prototype
// const myObject = {
//     a: 'b'
// }

// console.log(Object.getPrototypeOf(myObject))

// console.log(Object.getPrototypeOf(myObject) === Object.prototype)

// const mySecondObject = Object.create(myObject)

// console.log(mySecondObject)

// console.log(mySecondObject.a)

// console.log(Object.getPrototypeOf(mySecondObject) === myObject)

// //Classes Básicas / Classes = molde dos objetos
// const cachorro = {
//     raca: null,
//     patas: 4
// }

// //Criando objetos a partir do metodo Object.create
// const pastorAlemao = Object.create(cachorro)
// pastorAlemao.raca = 'Pastor Alemão';
// console.log(pastorAlemao)
// console.log(pastorAlemao.patas)

// const bulldog = Object.create(cachorro)
// bulldog.raca = "Bulldog"
// console.log(bulldog)

// //Função como classe - Funções Construtoras
// function criarCachorro(nome, raca) {
//     const cachorro = Object.create({})

//     cachorro.nome = nome
//     cachorro.raca = raca

//     return cachorro;
// }

// const bob = criarCachorro('Bob', 'Vira Lata')
// console.log(bob)

// const jack = criarCachorro("Jack", "Poodle")
// console.log(jack)
// console.log(Object.getPrototypeOf(jack))

// // Funções construtora
// function Cachorro(nome, raca) {
//     this.nome = nome;
//     this.raca = raca
// }

// //Objeto que eu criei
// function Gato(nome, raca){
//     this.nome = nome
//     this.raca = raca

// }
// //Instanciando meu objeto:
// const siberiano = new Gato("Aurora", "Siberiano")
// console.log(siberiano)

// const husky = new Cachorro("Ozzy", "Husky")
// console.log(husky)

// //Métodos na função contrutora
// Cachorro.prototype.uivar = function(){
//     console.log("AUUUUUU!!")
// }
// console.log(Cachorro.prototype)

// husky.uivar()

// //Criando meu próprio método:
// Gato.prototype.miar = function() {
//     console.log("Miau Miau !!")
// }

// siberiano.miar()

// //Classes ES6
// class CachorroClasse {
//     constructor(nome, raca){
//         this.nome = nome
//         this.raca = raca
//     }
// }

// const jeff = new CachorroClasse("Jeff", "Labrador")
// console.log(jeff)
// console.log(Object.getPrototypeOf(jeff))

// /*Criando minha classe*/
// class GatoClasse {
//     constructor(nome, raca, idade){
//         this.nome = nome
//         this.raca = raca
//         this.idade = idade
//     }
// }

// const Aurora = new GatoClasse("Aurora", "Vira Lata", 3)
// console.log(Aurora)

// //Mais sobre as classes
// class Caminhao {
//     constructor(eixos, cor){
//         this.eixos = eixos;
//         this.cor = cor;
//     }

//     descreverCaminhao() {
//         console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`)
//     }
// }

// const scania = new Caminhao(6, "Vermelha")
// console.log(scania)

// scania.descreverCaminhao()

// const c2 = new Caminhao(4, "Preta")
// console.log(c2)
// console.log(c2.motor)

// //Como adicionar uma propriedade na Classe = via prototype inserindo o nome da propriedade e atribuindo um valor
// Caminhao.prototype.motor = 2.0;

// const c3 = new Caminhao(6, "Azul");

// console.log(c3.motor)

// //Override nas propriedades via Prototype
// //O que é Override ? = substituição

// class Humano {
//     constructor(nome, idade){
//         this.nome = nome
//         this.idade = idade
//     }
// }

// const Eduardo = new Humano("Eduardo", 21)
// console.log(Eduardo)

// Humano.prototype.idade = "Não definida"

// console.log(Eduardo.idade)

// console.log(Humano.prototype.idade)

// //Criando minha classe e alterando a propriedade "idade" via prototype:
// class Humano2 {
//     constructor(nome, idade){
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const Kamylle = new Humano2("Kamylle", 21)
// console.log(Kamylle)

// Humano2.prototype.idade = 22

// console.log(Kamylle.idade)
// console.log(Humano2.prototype.idade)

// Symbol
class Aviao {
  constructor(marca, turbinas) {
    this.marca = marca;
    this.turbinas = turbinas;
  }
}

// Passa esse valor para os objetos que ela instancia
const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[pilotos] = 3;
Aviao.prototype[asas] = 2;

const boeing = new Aviao("Boeing", 10);
console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[pilotos]);

// Getters e Setters
class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }

  get exibirTitulo() {
    return `Você está lendo: ${this.titulo}`
  }

  set adicionarTags(tags){
    const tagsArrays = tags.split(",")
    this.tags = tagsArrays
  }
} 


const myPost = new Post("Algum post", "É um post sobre programação")
console.log(myPost)

console.log(myPost.exibirTitulo)

myPost.adicionarTags = "programação, javascript, node.js"
console.log(myPost)

// Herança
class Mamifero {
  constructor(patas){
    this.patas = patas;
  }
}

class Lobo extends Mamifero {
  constructor(patas, nome){
    super(patas, patas)
    this.nome = nome
  }
}

const shark = new Lobo(4, "Shark")
console.log(shark)
console.log(shark.patas)

// Operador instaceof = "instaceof" verifica se um objeto é pai de outro
console.log(shark instanceof Lobo)

console.log(Lobo instanceof Mamifero)

console.log(new Lobo(4, "teste") instanceof Mamifero)

console.log(new Post("a", "b") instanceof Lobo)

