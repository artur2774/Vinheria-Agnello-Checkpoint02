let qntdDeVinhos = 0;
let vinhoRose = 0;
let vinhoBranco = 0;
let vinhoTinto = 0;
let amadurecido = 0;
let antigo = 0;
let jovem = 0;
let safraMaisAntiga = 9999;
let vinhoMaisAntigo = "";
let estoqueBaixoQtd = 0;

let nomeDoVinho = prompt("Insira o nome do vinho");
let tipoDoVinho = prompt("Insira o tipo de vinho \nBranco, Tinto, Rose");
tipoDoVinho = tipoDoVinho.toLowerCase();

// função de verificação de idade
function verifIdade() {
    let safra = Number(prompt("Insira o ano da safra do vinho"))
    while (isNaN(safra)) {
        alert("Digite apenas números");
        safra = Number(prompt("Insira o ano da safra do vinho"));
    }
    return safra;
}

let safraDoVinho = verifIdade();

// função de separação de tipos
function addVinhos() {
    if (tipoDoVinho == "branco") {
        vinhoBranco += 1;
        qntdDeVinhos += 1;
    }
    else if (tipoDoVinho == "tinto") {
        vinhoTinto += 1;
        qntdDeVinhos += 1;
    }
    else if (tipoDoVinho == "rose") {
        vinhoRose += 1;
        qntdDeVinhos += 1;
    }
    else {
        alert("Insira um tipo válido")
    }
}

// função de identificação de safra
function anoSafra() {
    if (2026 - safraDoVinho > 50) {
        antigo += 1;
    }
    else if (2026 - safraDoVinho > 20) {
        amadurecido += 1;
    }
    else {
        jovem += 1;
    }
}

// função de verificção de estoque
function estoqueBaixo() {

    estoqueBaixoQtd = 0;

    if (vinhoBranco < 5) {
        console.log("Vinho Branco com estoque baixo")
        estoqueBaixoQtd += 1
    }
    if (vinhoRose < 5) {
        console.log("Vinho Rosé com estoque baixo")
        estoqueBaixoQtd += 1
    }
    if (vinhoTinto < 5) {
        console.log("Vinho Tinto com estoque baixo")
        estoqueBaixoQtd += 1
    }    
}


anoSafra();
addVinhos();
if (safraDoVinho < safraMaisAntiga) {
    safraMaisAntiga = safraDoVinho;
    vinhoMaisAntigo = nomeDoVinho;
}

while (nomeDoVinho != "sair") {
    alert("Se não desejar adicionar mais nenhum vinho digite: sair")
    nomeDoVinho = prompt("Insira o nome do vinho")
    if (nomeDoVinho == "sair") {
        break;
    }
    tipoDoVinho = prompt("Insira o tipo de vinho \nBranco, Tinto, Rose")
    tipoDoVinho = tipoDoVinho.toLowerCase();
    
    safraDoVinho = verifIdade();
    addVinhos();
    anoSafra();

    if (safraDoVinho < safraMaisAntiga) {
        safraMaisAntiga = safraDoVinho
        vinhoMaisAntigo = nomeDoVinho
    }
};

estoqueBaixo();

console.log("Quantidade total de vinhos:", qntdDeVinhos);

console.log("Vinhos brancos:", vinhoBranco);
console.log("Vinhos tintos:", vinhoTinto);
console.log("Vinhos rosé:", vinhoRose);

console.log("Vinhos jovens:", jovem);
console.log("Vinhos amadurecidos:", amadurecido);
console.log("Vinhos antigos:", antigo);

console.log("Quantidade de estoques baixos:", estoqueBaixoQtd);

console.log("Vinho mais antigo:", vinhoMaisAntigo);
console.log("Safra mais antiga:", safraMaisAntiga);

alert("Cadastro finalizado com sucesso!");
