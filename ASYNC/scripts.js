// setTimeout
console.log("Ainda não executou")

setTimeout(function(){
    console.log("Requisição Assincrona")
}, 2000)

console.log("Ainda não executou 2")

// setInterval : nao para de ser executada, como se fosse um loop 
console.log("Ainda nao começou")

// setInterval(function(){
//     console.log("Intervalo Assíncrono")
// }, 3000)

console.log("Ainda nao começou 2")

// Promises
const promessa = Promise.resolve(5 + 5)

console.log("Algum código")

promessa.then(value => {
    console.log(`A soma é: ${value}`)
    return value;
})
.then((value) => value -1)
.then((value) => console.log(`Agora é ${value}`))

console.log("Outro codigo")

// Falha nas Promises
Promise.resolve(4 * "asd")
.then((n) =>  {
    if(Number.isNaN(n)){
        throw new Error("Valores invalidos")
    }
})
.catch((err) => console.log(`Um erro ocorreu ${err}`))

// Rejeitando uma Promise: A rejeição, diferente do erro, ocorre quando nós decidimos ejetar uma promise
function checkNumber(n){
    return new Promise((resolve, reject) => {
        if(n > 10){
            resolve(`O número é maior que 10 `)
        }else{
            reject(new Error("Número muito baixo"))
        }
    })
}

const a = checkNumber(20)
const b = checkNumber(10)

a.then((v) => console.log (`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorre: ${err}`))

b.then((v) => console.log (`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorre: ${err}`))

// Resolvendo várias promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve(10)
    }, 3000)
})

const p2 = Promise.resolve(10 + 10)

const p3 = new Promise((resolve,reject) => {
    if(30 > 10) {
        resolve(30)
    }else {
        reject("Erro!")
    }
})

Promise.all([p1, p2, p3]).then((values) => console.log(values))

// Async Functions
async function somarComDeley(a, b){


    return a + b
}

somarComDeley(2, 4).then((value) => {
    console.log(`O resultado da soma é: ${value}`)
})

console.log("teste async")

// Assertions - Instrução await
// serve para aguardar o resultado de uma async function
function resolveComDeley(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Resolveu a Promise")
        }, 2000)
    })
}

async function chamandoAsync() {
    console.log("Chamando a Promise, e esperando o resultado")
    const result = await resolveComDeley();
    console.log(`O resultado chegou: ${result}`)
}

chamandoAsync();

// Generators = funcionam de forma semelhante as promises; Ações podem ser pausadas e continuadas depois; Novos operadores como: function* e yield
function* generator(){
    yield 1
    yield 2
    yield 3
}

const gen = generator();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)