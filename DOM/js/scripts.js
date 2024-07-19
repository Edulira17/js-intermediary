// Movendo-se pelo DOM
// Todos os elementos podem ser acessados através de "document.body"

console.log(document.body)
/* childNodes = retorna um array contendo os elementos do body */
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1].textContent)

// Selecionando Elementos: "getElemetsByTagName", "getElementById", "querySelector" = SÃO OS MAIS UTILIZADOS!

// Encontrando elementos por tag:
const listItens = document.getElementsByTagName("li")

console.log(listItens)

// Selecionando por ID
const title = document.getElementById("title")
console.log(title)

// Selecionando por classes
const products = document.getElementsByClassName("product")
console.log(products)
 
// Selecionando os elementos por CSS
const productsQuery = document.querySelectorAll(".product")
console.log(productsQuery)

const mainContainer = document.querySelector("#main-container")
console.log(mainContainer)

// Alterando o HTML: "insertBefore", "appendChild", "replaceChild"

// insertBefore
const p = document.createElement("p")

const header = title.parentElement    // inseriu um elemento antes 

header.insertBefore(p, title)

// appendChild
const navLinks = document.querySelector("nav ul")
const li = document.createElement("li")      //adicionou um elemento dentro de outro       

navLinks.appendChild(li)

// replaceChild
const h2 = document.createElement("h2")

h2.textContent = "Meu novo titulo!"   // substituiu o conteudo de um elemento

header.replaceChild(h2, title)


// Criando nós de texto = createTextNode
const myText = document.createTextNode("Agora vamos colocar mais um titulo")
console.log(myText)

const h3 = document.createElement("h3")

h3.appendChild(myText)

console.log(h3)

mainContainer.appendChild(h3)


