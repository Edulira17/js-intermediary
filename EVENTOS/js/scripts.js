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

// Eventos de mouse
const mouseEvents = document.querySelector("#mouse")

mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou o botão");
})

mouseEvents.addEventListener("mouseup", () => {
    console.log("Pressionou o botão");
})

mouseEvents.addEventListener("dblclick", () => {
    console.log("Clique duplo !");
})

// movimento do mouse
document.addEventListener("mousemove", (e) => {
//     console.log(`No eixo X: ${e.x}`)
//     console.log(`No eixo y: ${e.y}`)
})

// Evento por scroll
window.addEventListener("scroll", (e) => {
    // podemos calcular quantos pixels já passou do topo da tela
    if(window.pageYOffset > 200){
        console.log("Passamos de 200px.")
    }
})

// Evento de foco: Bom para inputs!
const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) => {
    console.log("Entrou no input")
})

input.addEventListener("blur", (e) => {
    console.log("Saindo do input")
})

// Eventos de carregamento de página
window.addEventListener("load", () => {
    console.log("A pagina carregou !! ")
})

/*
    NÃO MUITO UTILIZADO POR QUEBRAR O LIVRE ARBITRIO DO USUARIO, POR RETIRAR A POSSIBILIDADE DE SAIR DA PÁGINA;

    BOM PARA NAO PERDER AS INFORMAÇÕES DO USUÁRIO DENTRO DE UM FORMULÁRIO;
*/ 

// window.addEventListener("beforeunload", (e) => {
//     e.preventDefault();
//     (e) = BeforeUnloadEvent.returnValue;
// })

// Técnica de debounce
const debounce = (f, delay) => {
    let timeout

    return (...arguments) => {
        // Limpa o timeout
        if(timeout){
            clearTimeout(timeout)
        }

        // Executa timeout que gera o delay de novo
        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay)
    }
}

window.addEventListener(
    "mousemove", 
    debounce(() => {
    console.log("Executando a cada 400ms")
}, 400)
)


