// SEMANA 1
console.log("SEMANA 1");
const comida1 = "ARROZ";
const quantidade1 = 2;
const vegetariano1 = true;

const comida2 = "FEIJÃO";
const quantidade2 = 1;
const vegetariano2 = true;

const comida3 = "BIFE ACEBOLADO";
const quantidade3 = 1;
const vegetariano3 = false;

const soma = quantidade1 + quantidade2 + quantidade3;
const media = soma / 3;
console.log("Quantidade média de kg de alimentos: ", media);

const vegetariano = vegetariano1 && vegetariano2 && vegetariano3;
console.log("Todos os alimentos são vegetarianos?", vegetariano);

console.log(" ");
// SEMANA 2
console.log("SEMANA 2");
const arrayCategoria1 = ["Prato principal"];
const arrayCategoria2 = ["Prato principal"];
const arrayCategoria3 = ["Carne"];

console.log(`Receita 1: ${comida1}
Quantidade kg: ${quantidade1}
Vegetariano? ${vegetariano1}
Categoria: ${arrayCategoria1}`);

console.log(`Receita 2: ${comida2}
Quantidade kg: ${quantidade2}
Vegetariano? ${vegetariano2}
Categoria: ${arrayCategoria2}`);

console.log(`Receita 3: ${comida3}
Quantidade kg: ${quantidade3}
Vegetariano? ${vegetariano3}
Categoria: ${arrayCategoria3}`);

console.log(" ");
//SEMANA 3
console.log("SEMANA 3");

receita1 = {
    comida: "arroz",
    quantidade: 2,
    vegetariano: true,
    imagem: "./imagens/arroz.jpeg",
    link: "https://r.search.yahoo.com/_ylt=AwrJ.Ur7dhJj3RcV0yrz6Qt.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1662183291/RO=10/RU=https%3a%2f%2fpt.wikipedia.org%2fwiki%2fArroz/RK=2/RS=CY1_KdgkqSctFEoWJRVhr_6a4m0-"
}
receita2 = {
    comida: "feijão",
    quantidade: 1,
    vegetariano: true,
    imagem: "./imagens/feijao.jpg",
    link: "https://r.search.yahoo.com/_ylt=AwrFdeU5eBJj2TEVXUzz6Qt.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1662183609/RO=10/RU=https%3a%2f%2fpt.wikipedia.org%2fwiki%2fFeij%25C3%25A3o/RK=2/RS=1UFrzCEDsVZbyryR2n9pXapOCHw-"
}
receita3 = {
    comida: "bife acebolado",
    quantidade:1,
    vegetariano: false,
    imagem: "./imagens/bife.webp",
    link: "https://pt.wikipedia.org/wiki/Bife"
}

const arrayObjetos = []
arrayObjetos.push = (receita1, receita2, receita3);
console.log(arrayObjetos);

// CRIADO PARA AUXILIAR NA SEMANA 6
arrayDeObjetos = [
    {
    comida: "arroz",
    quantidade: 2,
    vegetariano: "sim",
    imagem: "./imagens/arroz.jpeg",
    link: "https://r.search.yahoo.com/_ylt=AwrJ.Ur7dhJj3RcV0yrz6Qt.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1662183291/RO=10/RU=https%3a%2f%2fpt.wikipedia.org%2fwiki%2fArroz/RK=2/RS=CY1_KdgkqSctFEoWJRVhr_6a4m0-"
    },

    {
    comida: "feijão",
    quantidade: 1,
    vegetariano: "sim",
    imagem: "./imagens/feijao.jpg",
    link: "https://r.search.yahoo.com/_ylt=AwrFdeU5eBJj2TEVXUzz6Qt.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1662183609/RO=10/RU=https%3a%2f%2fpt.wikipedia.org%2fwiki%2fFeij%25C3%25A3o/RK=2/RS=1UFrzCEDsVZbyryR2n9pXapOCHw-"
    },

    {
    comida: "bife acebolado",
    quantidade: 1,
    vegetariano: "não",
    imagem: "./imagens/bife.webp",
    link: "https://r.search.yahoo.com/_ylt=AwrFdeU5eBJj2TEVXUzz6Qt.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1662183609/RO=10/RU=https%3a%2f%2fpt.wikipedia.org%2fwiki%2fFeij%25C3%25A3o/RK=2/RS=1UFrzCEDsVZbyryR2n9pXapOCHw-"
    }
]

console.log(arrayDeObjetos);

console.log(" ");
// SEMANA 4
console.log("SEMANA 4");
// const arrayObjetos = []

// if(receita1.vegetariano === true){
//     arrayObjetos.push(receita1)
// } else{
//     console.log("O prato", comida1, "não é vegetariano")}

// if(receita2.vegetariano === true){
//     arrayObjetos.push(receita2)
// } else{
//     console.log("O prato", comida2, "não é vegetariano")}

// if (receita3.vegetariano === true){
//     arrayObjetos.push(receita3)
// } else{
//     console.log("O prato", comida3, "não é vegetariano")}

// console.log("Os pratos vegetarianos são:", arrayObjetos);

// alert(`O prato ${receita3.comida} não é vegetariano`);

console.log(" ");
// //SEMANA 5
console.log("SEMANA 5");
const arrayCategorias = [
    ["Arroz", 2, true, "Prato principal"],
    ["Feijão", 1, true, "Prato principal"],
    ["Bife acebolado", 1, false, "Carne"]
]

for(i = 0; i <= 2; i++){
    console.log(`Prato ${i+1} - ${arrayCategorias[i]}`);
}

console.log(" ");
//SEMANA 6
console.log("SEMANA 6");

function imprimeObjeto (objeto){
    let stringObjeto = ''
    stringObjeto = objeto
    console.log(stringObjeto)
}

imprimeObjeto(receita1)

const funcPesquisa = (arrayDeObjetos, input)=> {
    for(i in arrayDeObjetos) {
        for (j in arrayDeObjetos[i]) {
            if (arrayDeObjetos[i][j] === input) {
                let main = document.getElementById("main")
                let div = document.createElement("div")
                let section = document.createElement("section")
                let ul = document.createElement("ul")
                let li1 = document.createElement("li")
                let li2 = document.createElement("li")
                let li3 = document.createElement("li")
                let a = document.createElement("a")
                let imagem = document.createElement("img")

                div.setAttribute("id", "div-sections")
                section.setAttribute("id", "section1")
                a.setAttribute("href", arrayDeObjetos[i].link)
                a.setAttribute("target", "blank")
                a.innerHTML = arrayDeObjetos[i].comida.toUpperCase()
                li1.innerHTML = `Comida: `
                li2.innerHTML = `Quantidade: ${arrayDeObjetos[i].quantidade}`
                li3.innerHTML = `Vegetariano:  ${arrayDeObjetos[i].vegetariano}`
                imagem.src = arrayDeObjetos[i].imagem

                main.appendChild(div)
                div.appendChild(section)
                section.appendChild(ul)
                ul.appendChild(li1)
                ul.appendChild(li2)
                ul.appendChild(li3)
                li1.appendChild(a)
                section.appendChild(imagem)
            }
        }        
    }    
}

for(i in arrayDeObjetos){
    let div = document.getElementById("div-sections")
    let section = document.createElement("section")
    let ul = document.createElement("ul")
    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    let li3 = document.createElement("li")
    let a = document.createElement("a")
    let imagem = document.createElement("img")

    section.setAttribute("id", "section1")
    a.setAttribute("href", arrayDeObjetos[i].link)
    a.setAttribute("target", "_blank")
    a.innerHTML = arrayDeObjetos[i].comida.toUpperCase()
    li1.innerHTML = `Comida: `
    li2.innerHTML = `Quantidade: ${arrayDeObjetos[i].quantidade}`
    li3.innerHTML = `Vegetariano:  ${arrayDeObjetos[i].vegetariano}`
    imagem.src = arrayDeObjetos[i].imagem

    div.appendChild(section)
    section.appendChild(ul)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    li1.appendChild(a)
    section.appendChild(imagem)
}

function busca(event){
    event.preventDefault()
    let input = document.getElementById("input").value.toLowerCase()
    if(input === ""){
        alert("Digite algo para pesquisa")
    }else{
        document.getElementById("div-sections").remove("div")
        funcPesquisa(arrayDeObjetos, input)
    }
}