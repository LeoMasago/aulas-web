var result = document.getElementById("resultado")

function soma(){
    // Entrada
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);

    // Processamento
    var soma = n1 + n2
    // Saída

    result.innerText = `O resultado da soma é: ${soma}` 
}
function sub(){
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);

    var sub = n1 - n2

    result.innerText = `O resultado da subtração é: ${sub}`
}

function multiplica(){
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);

    var multiplica = n1 * n2

    result.innerText = `O resultado da multiplicação é: ${multiplica}`
}

function divide(){
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);
    
    var divide = n1 / n2

    result.innerText = `O resultado da divisão é: ${divide}`
}

/* function divide(){
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);
    if(num2 === 0){
        document.getElementById("result").innerText="Erro: divisão por zero";
    } else{
        document.getElementById("result").innerText = n1 / n2;
    }
    result.innerText = `O resultado da divisão é: ${result}`
} */


