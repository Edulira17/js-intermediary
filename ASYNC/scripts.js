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

a.then((v) => console.log `O resultado é ${v}`).catch((err) => console.log(`Um erro ocorre: ${err}`))