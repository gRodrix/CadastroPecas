let peso = 100;

if(peso >= 100) {
    console.log("a peça tem o peso adequado, pode ser cadastrada!")
} else {
    console.log("a peça não pode ser cadastrada,possui um peso abaixo do minímo!")
}

let listaPecas =["Calota", "Freio", "Insufilm"]

if (listaPecas.length < 10){
    console.log ("A lista ainda possui espaço para cadastro")
} else {
    console.log ("A lista esta cheia, capacidade maxima atingida")
} 

let texto = "Exemplo" // String

let nomePeca = "Calota"

if ( nomePeca.length > 3) {
    console.log ("Nome da peça é válido, prossiga com o cadastro!")
} else {
    console.log ("Nome da peça é inválido, tem que possuir pelo menos 3 caracteres")
}