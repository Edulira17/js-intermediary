// Adicionando Eventos 
const btn = document.querySelector("#my-button")

// Primeiro argumento: String que é o tipo do evento; E o segundo uma função que vai acontecer após o evento acontecer
btn.addEventListener("click", function () {
    console.log("Clicou aqui !")
});


// Removendo eventos
const secondBtn = document.querySelector("#btn")

function imprimirMensagem() {
    console.log("Teste")
}

secondBtn.addEventListener("click", imprimirMensagem)

const thirdBtn = document.querySelector("#other-btn")
thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})

// argumento do evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event)
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)
})

// Propagação 
const containerBtn = document.querySelector("#btn-container");
const btnInsiderContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
});

btnInsiderContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Evento 2");
});

// Removendo evento padrão
const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Não alterou nada a pagina")
})