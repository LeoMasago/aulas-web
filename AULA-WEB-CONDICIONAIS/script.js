function livros(){
var qtd = parseInt(document.getElementById("livros").value);

if (qtd >= 7){
    var valor = qtd * 15
    resultado.innerText = `O valor é R$${valor}`
} else{
    var valor = qtd * 22
    resultado.innerText = `O valor é R$${valor}`
}
}

function velocidade(){
var velocidade = parseInt(document.getElementById("velo").value);
    
if (velocidade > 60){
    var multa = (velocidade - 60) * 100
    veloFinal.innerText = `O valor da multa é R$${multa}`
} else{
    veloFinal.innerText = `Velocidade dentro do limite`
}
}

function cargo(){

var c = document.getElementById("cargo").value;
switch(c) {
    case 'junior':
        resultCargo.innerText = `Salário Júnior`
        break;
    case 'pleno':
        resultCargo.innerText = `Salário Pleno`
        break;
    case 'senior':
        resultCargo.innerText = `Salário Sênior`
        break;
    default:
        resultCargo.innerText = `Inválido`
        break;
}
}

