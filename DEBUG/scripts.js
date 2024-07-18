"use strict";
// opa = "teste"
// const undefined = 10;
// delete [].length

const opa = "teste";

// console.log
let a = 1;
let b = 2;

if (a == 1) {
  a = b + 2;
}

console.log(a);

for (let i = 0; i < b; i++) {
  a = a + 2;
  console.log(a);
}

if (a > 5) {
  a = 25;
}

console.log(a);

// Debugger
let c = 1;
let d = 2;
if (c == 1) {
  c = d + 2;
}

// debugger;

for (let i = 0; i < d; i++) {
  c = c + 2;
}

console.log("Executou o loop");

// debugger;

if (c > 5) {
  c = 25;
}

// Tratamento de dado por função
// Sempre devemos criar validações e tratamento para os dados que o usuário passa
function checkNumber(n) {
    const result = Number(n)

    if(Number.isNaN(result)){
        console.log("Valor incorreto!")
        return;
    }

    console.log("Valor correto!")
    return result;
}

checkNumber(5)
checkNumber("10") // deu true porque a função conseguiu converter a string para um numero
checkNumber({})
checkNumber("teste")


// Exceptions
let x = 10

if(x != 11){
    //throw new Error("O valor de x não pode ser diferente de 11")
}

// Try Catch
try {
    const soma = x + y
} catch(error){
    console.log(`Erro no programa: ${error}`)
}

// Finally 
// Ela é executada independente de haver um algum erro ou nao em try
try {
    const value = checkNumber(5)

    if(!value){
        throw new Error("Valores invalidos")
    }
}catch (error){
    console.log(`Opa, aconteceu um problema: ${error}`)
}finally {
    console.log("O código foi executado")
}

// Assertions = são quando os tratamentos de valores passados pelo usuário, germa um erro;
// Porém este recurso tem como objetivo nos ajudar no desenvolvimento do programa, ou seja, seria algo para os devs e nao para os usuarios.